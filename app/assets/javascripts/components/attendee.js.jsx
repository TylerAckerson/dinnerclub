Attendee = React.createClass({
  removeAttendee: function(e) {
    e.preventDefault();

    setTimeout(function() {
      ApiUtil.removeAttendee(this.props.attendee.id);
    }.bind(this), 500 );
  },

  render: function(){
    var attendee = this.props.attendee;

    return (
      <tr className="row">
        <td className="col-xs-3 text-left">{attendee.name}</td>
        <td className="col-xs-3">{attendee.phone}</td>
        <td className="col-xs-3 text-right">
          <button type="submit"
          className="btn btn-default full-width remove"
          onClick={this.removeAttendee}>
            <span className="glyphicon glyphicon-minus"/>
          </button>
        </td>
      </tr>
    );
  }
});
