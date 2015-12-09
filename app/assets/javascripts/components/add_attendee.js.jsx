AddAttendee = React.createClass({
  getInitialState: function(){
    return { email: "" };
  },

  updateEmail: function(e) {
    e.preventDefault();
    this.setState( { email: e.currentTarget.value } );
  },

  addAttendee: function(e){
    e.preventDefault();

    email = this.state.email;
    if (this.validateEmail(email)) {
      this.props.addAttendee(email);
      this.setState(this.getInitialState());
    }
  },

  validateEmail: function(email){
    if ( typeof email === "undefined" || !(this.isEmail(email)) ) {
      $("#email").addClass("invalid");
      return false;
    } else {
      $("#email").removeClass("invalid");
      return true;
    }
  },

  isEmail: function(str){
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (str.match(pattern)){
      return str.match(pattern)[0] === str;
    } else {
      return false;
    }
  },

  render: function(){
    return (
      <div className="row">
        <h4>Invite a friend to this meal</h4>
        <div className="col-sm-8 col-sm-offset-2">
          <form role="form" className="form"
                            onSubmit={this.addAttendee}>

              <div className="form-group">
                    <input className="form-control"
                           id="email"
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
      </div>
    );
  }
});
