AddAttendee = React.createClass({
  getInitialState: function(){
    return { email: "" };
  },

  handleAttendee: function(e){
    e.preventDefault();
    //add attendee to meal
  },

  updateEmail: function(e) {
    e.preventDefault();
    this.setState( { email: e.currentTarget.value } );
  },

  render: function(){
    return (
      <div className="row">
        <h4>Add an attendee</h4>
        <form role="form" className="form-inline"
                          onSubmit={this.handleAttendee}>

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
