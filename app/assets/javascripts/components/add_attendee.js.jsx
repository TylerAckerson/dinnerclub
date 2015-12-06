AddAttendee = React.createClass({
  getInitialState: function(){
    return { email: "" };
  },

  addAttendee: function(e){
    e.preventDefault();

    this.props.addAttendee(this.state);
    this.setState(this.getInitialState());
  },

  updateEmail: function(e) {
    e.preventDefault();
    this.setState( { email: e.currentTarget.value } );
  },

  render: function(){
    return (
      <div className="row">
        <h4>Invite a friend to this meal</h4>
        <form role="form" className="form-inline"
                          onSubmit={this.addAttendee}>

            <div className="form-group">
                  <input className="form-control"
                         type="text"
                         placeholder="Attendee e-mail"
                         onChange={this.updateEmail}
                         value={this.state.email}>
                  </input>
                  <input className="btn btn-primary"
                         type="submit"
                         value="Add"/>
                </div>

        </form>
      </div>
    );
  }
});
