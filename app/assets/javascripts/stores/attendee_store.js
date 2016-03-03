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
      var attendeeIdx = this._findAttendeeByPhone(attendeePhone);

      if (attendeeIdx !== -1) {
        _attendees.splice(attendeeIdx, 1);
      }
    },

    updateAttendee: function (attendee){
      var attendeeIdx = this._findAttendee(attendee);

      if (attendeeIdx !== -1) {
        _attendees[attendeeIdx] = attendee;
      }
    },

    _findAttendeeByPhone: function(phone) {
      return this.attendees().findIndex(function(attendee, idx) {
        return attendee.phone === phone;
      });
    },

    _findAttendee: function(attendee) {
      return this.attendees().findIndex(function(attendeeToFind, idx) {
        return AttendeeStore._isSameAttendee(attendee, attendeeToFind);
      });
    },

    _isSameAttendee(firstAttendee, secondAttendee){
      return firstAttendee.name === secondAttendee.name &&
             firstAttendee.phone === secondAttendee.phone &&
             firstAttendee.meal_id === secondAttendee.meal_id;
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
        case AttendeeConstants.SEND_ATTENDEE_INVITE:
          root.AttendeeStore.updateAttendee(payload.attendee);
          AttendeeStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
