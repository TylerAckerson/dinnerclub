var AttendeeActions = {
  addAttendee: function (attendee) {
    AppDispatcher.dispatch({
      actionType: AttendeeConstants.ADD_ATTENDEE,
      attendee: attendee
    });
  },

  removeAttendee: function (attendeePhone) {
    AppDispatcher.dispatch({
      actionType: AttendeeConstants.REMOVE_ATTENDEE,
      attendeePhone: attendeePhone
    });
  },

  sendAttendeeInvite: function (attendee) {
    AppDispatcher.dispatch({
      actionType: AttendeeConstants.SEND_ATTENDEE_INVITE,
      attendee: attendee
    });
  }
};
