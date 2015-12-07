var MealActions = {
  addAttendee: function(attendee){
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_ADD_ATTENDEE,
      attendee: attendee
    });
  },
  removeAttendee: function(attendee){
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_REMOVE_ATTENDEE,
      attendee: attendee
    });
  }
};
