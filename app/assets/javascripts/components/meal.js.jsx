Meal = React.createClass({
  getInitialState: function () {
    return { attendees: AttendeeStore.attendees() };
  },

  componentDidMount: function () {
    AttendeeStore.addAttendeesChangeListener(this._updateAttendees);
  },

  componentWillUnmount: function () {
    AttendeeStore.removeAttendeesChangeListener(this._updateAttendees);
  },

  _updateAttendees: function () {
    var attendees = AttendeeStore.attendees(),
        newState = this.state;

    newState.attendees = attendees;
    this.setState(newState);
  },

  sendAllInvites: function () {
    this.state.attendees.forEach(function (attendee, idx) {
      if (typeof attendee.status === 'undefined') {
        this.sendInvite(attendee);
      }
    }.bind(this));
  },

  sendInvite: function (attendee) {
    attendee.meal_id = MealStore.currentMeal().id;
    ApiUtil.sendAttendeeInvite(attendee);
  },

  render: function () {
    var inviteCount = this.state.attendees.filter(function (attendee) {
      return (typeof attendee.status === 'undefined');
    }).length;

    var invitePlural = (inviteCount === 1 ? "invite" : "invites");

    if (inviteCount) {
      $('#invite-all').removeClass('hidden');
    } else {
      $('#invite-all').addClass('hidden');
    }

    console.log(this.state.attendees);

    return (
      <div className="container element text-center">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <MealBasicInfo header={"Your Meal"} button={"Update"} onSubmit={this.updateMeal}/>
          </div>
        </div>

        <div className="row">
          <AddAttendee/>
        </div>

        <h3>Attendee list</h3> {
          this.state.attendees.map(function (attendee) {
            return <Attendee key={attendee.phone} attendee={attendee}/>;
          })
        }

        <div className="row top-buffer">
          <div className="col-xs-4 col-xs-offset-4">
            <button id='invite-all' className="btn btn-primary create-meal hidden"
                    onClick={this.sendAllInvites}>
                    Send {inviteCount} {invitePlural}
            </button>
          </div>
        </div>
      </div>
    );
  }
});
