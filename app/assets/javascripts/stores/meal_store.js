(function(root) {
  'use strict';

  var _currentMeal = { main_course: "",
                       meal_time: "",
                       attendees: [] };

  var MEAL_CHANGE_EVENT = "changeMeal";

  root.MealStore = $.extend({}, EventEmitter.prototype, {
    currentMeal: function(){
      return $.extend({}, _currentMeal);
    },

    addAttendee: function(attendee){
      _currentMeal.attendees.push(attendee);
    },

    removeAttendee: function(attendee){
      var attendeeIdx = this._findAttendee(attendee);

      if (attendeeIdx !== -1) {
        _currentMeal.attendees.splice(attendeeIdx, 1);
      }
    },

    _findAttendee: function(email) {
      var foundIdx = -1;
      this.currentMeal().attendees.forEach(function(attendee, idx) {
        if (email === attendee) { foundIdx = idx; }
      });

      return foundIdx;
    },

    updateMainCourse: function(course){
      _currentMeal.main_course = course;
    },

    addChangeListener: function(callback){
      this.on(MEAL_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(MEAL_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case (MealConstants.MEAL_ADD_ATTENDEE):
          root.MealStore.addAttendee(payload.attendee);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        case (MealConstants.MEAL_REMOVE_ATTENDEE):
          root.MealStore.removeAttendee(payload.attendee);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        case (MealConstants.MEAL_UPDATE_MAIN_COURSE):
          root.MealStore.updateMainCourse(payload.course);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        }
      })
  });
}(this));
