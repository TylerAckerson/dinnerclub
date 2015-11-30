AddAttendee = React.createClass({
  getInitialState: function(){
    return { email: "" };
  },

  handleAttendee: function(e){
    e.preventDefault();
    //add attendee to meal
  },

  render: function(){
    return (
      <div className="row">
        <h4>Add yourself?</h4>
        <form role="form" className="form-inline"
                          onSubmit={this.handleAttendee}>

            <div className="form-group">
                  <input className="btn btn-primary"
                         type="submit"
                         value="Yes, I'm attending!"/>
                </div>

        </form>
      </div>
    );
  }
});
