(function(root) {
  'use strict';

  var _currentMeal = {
    host_name: "",
    host_number: "",
    meal_location: "",
    meal_time: "" 
  },

  MEAL_CHANGE_EVENT = "changeMeal",
  MEAL_CREATE_EVENT = "createMeal";

  root.MealStore = $.extend({}, EventEmitter.prototype, {
    currentMeal: function(){
      return $.extend({}, _currentMeal);
    },

    receiveMeal: function(meal){
      _currentMeal = meal;
    },

    updateHostName: function(hostName){
      _currentMeal.host_name = hostName;
    },

    updateHostNumber: function(hostNumber){
      _currentMeal.host_number = hostNumber;
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
        case (MealConstants.MEAL_UPDATE_HOST_NAME):
          root.MealStore.updateHostName(payload.hostName);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        case (MealConstants.MEAL_UPDATE_HOST_NUMBER):
          root.MealStore.updateHostNumber(payload.hostNumber);
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
        case (MealConstants.MEAL_CHANGE):
          root.MealStore.receiveMeal(payload.meal);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        case (MealConstants.MEAL_UPDATE):
          root.MealStore.receiveMeal(payload.meal);
          root.MealStore.emit(MEAL_CHANGE_EVENT);
          break;
        }
      })
  });
}(this));
