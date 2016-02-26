Attendee = React.createClass({
  removeAttendee: function(e) {
    e.preventDefault();

    setTimeout(function() {
      AttendeeActions.removeAttendee(this.props.attendee.phone);
    }.bind(this), 500 );
  },

  sendAttendeeInvite: function (e) {
    e. preventDefault();

    debugger;
  },

  render: function(){
    var attendee = this.props.attendee;

    return (
      <div className="row">
        <div className="col-xs-offset-3 col-xs-2 text-left">{attendee.name}</div>
        <div className="col-xs-2">{attendee.phone}</div>
        <div className="col-xs-1 text-left">
          <button type="submit"
          className="btn btn-default full-width remove"
          onClick={this.removeAttendee}>
            <span className="glyphicon glyphicon-text">Remove  </span>
            <span className="glyphicon glyphicon-minus"/>
          </button>
        </div>        
        <div className="col-xs-1 text-left">
          <button type="submit"
          className="btn btn-default full-width send"
          onClick={this.sendAttendeeInvite}>
            <span className="glyphicon glyphicon-text">Send  </span>
            <span className="glyphicon glyphicon-send"/>
          </button>
        </div>
      </div>
    );
  }
});
