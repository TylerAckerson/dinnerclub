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

    removeAttendee: function (attendee){
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
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case AttendeeConstants.ADD_ATTENDEE:
          root.AttendeeStore.addAttendee(payload.attendee);
          AttendeeStore.emit(CHANGE_EVENT);
          break;
        case AttendeeConstants.REMOVE_ATTENDEE:
          root.AttendeeStore.removeAttendee(payload.attendee);
          AttendeeStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
