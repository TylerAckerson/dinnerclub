Attendee = React.createClass({
  removeAttendee: function(e) {
    e.preventDefault();

    setTimeout(function() {
      AttendeeActions.removeAttendee(this.props.attendee.phone);
    }.bind(this), 500);
  },

  sendInvite: function (e) {
    e.preventDefault();

    var attendee = this.props.attendee;
        attendee.meal_id = MealStore.currentMeal().id;

    ApiUtil.sendAttendeeInvite(attendee);
  },

  render: function(){
    var attendee = this.props.attendee,
        buttons;

    if (attendee.status === 'invited') {
      buttons = <div className="col-xs-2 text-left">Pending</div>;
    } else {
      buttons =
        <div className="col-xs-2 text-left">
          <div className="row text-left">
            <button type="submit"
            className="btn btn-default full-width remove"
            onClick={this.removeAttendee}>
              <span className="glyphicon glyphicon-text">Remove  </span>
              <span className="glyphicon glyphicon-minus"/>
            </button>
          </div>
          <div className="row text-left">
            <button type="submit"
            className="btn btn-default full-width send"
            onClick={this.sendInvite}>
              <span className="glyphicon glyphicon-text">Send  </span>
              <span className="glyphicon glyphicon-send"/>
            </button>
          </div>
        </div>;
  }

    return (
      <div className="row text-center">
        <div className="col-xs-offset-3 col-xs-2">{attendee.name}</div>
        <div className="col-xs-2">{attendee.phone}</div>
        {buttons}
      </div>
    );
  }
});
