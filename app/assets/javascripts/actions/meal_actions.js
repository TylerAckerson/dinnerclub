var MealActions = {
  addAttendee: function (attendee) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_ADD_ATTENDEE,
      attendee: attendee
    });
  },
  removeAttendee: function (attendee) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_REMOVE_ATTENDEE,
      attendee: attendee
    });
  },
  updateHostName: function (hostName) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE_HOST_NAME,
      hostName: hostName
    });
  },
  updateHostNumber: function (hostNumber) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE_HOST_NUMBER,
      hostNumber: hostNumber
    });
  },
  updateLocation: function (mealLocation) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE_LOCATION,
      mealLocation: mealLocation
    });
  },
  updateMealTime: function (mealTime) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE_MEAL_TIME,
      mealTime: mealTime
    });
  },
  receiveMeal: function (meal) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_RECEIVE,
      meal: meal
    });
  },
  updateMeal: function (updatedMeal) {
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE,
      meal: updatedMeal
    });
  }
};
