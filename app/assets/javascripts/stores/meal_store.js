(function(root) {
  'use strict';

  var _currentMeal = {  host_name: "",
                        meal_location: "",
                        meal_time: "" },

      MEAL_CHANGE_EVENT = "changeMeal",
      MEAL_CREATE_EVENT = "createMeal";

  root.MealStore = $.extend({}, EventEmitter.prototype, {
    currentMeal: function(){
      return $.extend({}, _currentMeal);
    },

    receiveMeal: function(meal){
      _currentMeal = meal;
    },

    // addAttendee: function(attendee){
    //   _currentMeal.attendees.push({ email: attendee });
    // },

    // removeAttendee: function(attendee){
    //   var attendeeIdx = this._findAttendee(attendee);

    //   if (attendeeIdx !== -1) {
    //     _currentMeal.attendees.splice(attendeeIdx, 1);
    //   }
    // },

    // _findAttendee: function(email) {
    //   var foundIdx = -1;
    //   this.currentMeal().attendees.forEach(function(attendee, idx) {
    //     if (email === attendee) { foundIdx = idx; }
    //   });

    //   return foundIdx;
    // },

    updateHostName: function(hostName){
      _currentMeal.host_name = hostName;
    },    

    updateLocation: function(mealLocation){
      _currentMeal.meal_location = mealLocation;
    },

    updateDateTime: function(mealTime) {
      _currentMeal.meal_time = mealTime;
    },

    addChangeListener: function(callback){
      this.on(MEAL_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(MEAL_CHANGE_EVENT, callback);
    },    

    addCreateListener: function(callback){
      this.on(MEAL_CREATE_EVENT, callback);
    },

    removeCreateListener: function(callback){
      this.removeListener(MEAL_CREATE_EVENT, callback);
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
        case (MealConstants.MEAL_UPDATE_HOST_NAME):
          root.MealStore.updateHostName(payload.hostName);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;        
        case (MealConstants.MEAL_UPDATE_LOCATION):
          root.MealStore.updateLocation(payload.mealLocation);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        case (MealConstants.MEAL_UPDATE_MEAL_TIME):
          root.MealStore.updateDateTime(payload.mealTime);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        case (MealConstants.MEAL_RECEIVE):
          root.MealStore.receiveMeal(payload.meal);
          root.MealStore.emit(MEAL_CREATE_EVENT);
          break;
        }
      })
  });
}(this));
