Meal = React.createClass({
  getInitialState: function () {
    return { attendees: AttendeeStore.attendees() };
  },

  componentDidMount: function () {
    AttendeeStore.addAttendeesChangeListener(this._updateAttendees);
  },

  componentWillUnmount: function () {
    AttendeeStore.removeAttendeesChangeListener(this.updateAttendees);
  },

  _updateAttendees: function () {
    var attendees = AttendeeStore.attendees(),
        newState = this.state;

    newState.attendees = attendees;
    this.setState(newState);
  },

  updateMeal: function (meal) {
    ApiUtil.updateMeal({meal: meal});
  },
  
  render: function () {
    return (
      <div className="container element text-center">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <MealBasicInfo header={"Your Meal"} button={"Update"} onSubmit={this.updateMeal}/>
          </div>
        </div>

        <div className="row">
          <AddAttendee/>
          <h3>Attendee list</h3>
          <table className="table">
            <div className="row"> {
              this.state.attendees.map(function (attendee) {
                return <Attendee key={attendee.phone} attendee={attendee} />;
              })
            }
            </div>
          </table>
        </div>
      </div>
    );
  }
});
