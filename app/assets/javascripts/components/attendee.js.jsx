Attendee = React.createClass({
  removeAttendee: function(e) {
    e.preventDefault();

    setTimeout(function() {
      // OrderActions.orderRemoveItem(this.props.orderItem.counter);
    }.bind(this), 500 );
  },

  render: function(){
    return (
      <tr className="row">
        <td className="col-xs-6 col-xs-offset-2 text-left">{this.props.attendee}</td>
        <td className="col-xs-2">
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
