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

  removeAttendee: function (attendee) {
    debugger;
  },

  sendInvite: function (attendee) {
    debugger;
  },

  sendAllInvites: function () {
    debugger;
  },
  
  render: function () {
    var inviteCount = this.state.attendees.filter(function (attendee) {
      return !attendee.status;
    }).length;

    var invitePlural = (inviteCount === 1 ? "invite" : "invites");

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
            <button className="btn btn-primary create-meal"
                    onClick={this.sendAllInvites}>
                    Send {inviteCount} {invitePlural}
            </button>
          </div>
        </div>
      </div>
    );
  }
});
