(function(root) {
  'use strict';

  var _currentMeal = { attendees: [] };
  var MEAL_CHANGE_EVENT = "changeMeal";

  root.MealStore = $.extend({}, EventEmitter.prototype, {
    currentMeal: function(){
      return $.extend({}, _currentMeal);
    },

    addAttendee: function(attendee){
      _currentMeal.attendees.push(attendee);
    },

    removeAttendee: function(attendee){
      console.log("remove attendee");
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
        }
      })
  });
}(this));
