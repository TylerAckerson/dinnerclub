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
  },
  updateMainCourse: function(course){
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE_MAIN_COURSE,
      course: course
    });
  },
  updateMealTime: function(datetime){
    AppDispatcher.dispatch({
      actionType: MealConstants.MEAL_UPDATE_DATE_TIME,
      datetime: datetime
    });
  }
};
