(function(root){
  'use strict';

  var _attendees = [],
      CHANGE_EVENT = "change";

  root.AttendeeStore = $.extend({}, EventEmitter.prototype, {
    addAttendeesChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeAttendeesChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    attendees: function (){
      return _attendees;
    },

    addAttendee: function (attendee) {
      _attendees.push(attendee);
    },

    removeAttendee: function (attendeePhone){
      var attendeeIdx = this._findAttendee(attendeePhone);

      if (attendeeIdx !== -1) {
        _attendees.splice(attendeeIdx, 1);
      }
    },

    _findAttendee: function(phone) {
      return this.attendees().findIndex(function(attendee, idx) {
        return attendee.phone === phone;
      });
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case AttendeeConstants.ADD_ATTENDEE:
          root.AttendeeStore.addAttendee(payload.attendee);
          AttendeeStore.emit(CHANGE_EVENT);
          break;
        case AttendeeConstants.REMOVE_ATTENDEE:
          root.AttendeeStore.removeAttendee(payload.attendeePhone);
          AttendeeStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
