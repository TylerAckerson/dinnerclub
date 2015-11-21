SignIn = React.createClass({
  getInitialState: function(){
    return { email: "" };
  },

  updateEmail: function(e) {
    e.preventDefault();
    this.setState( { email: e.currentTarget.value } );
  },

  handleEmail: function(){
    if (this.state.email === "") {
      $(".email-field").typed({
        strings: ["tyler@tyler.tyler"],
        typeSpeed: 0
      });
      console.log("tyler email submitted");
    } else {
      console.log("email submitted");
    }
  },

  render: function(){
    return (
      <div className="row sign-in text-center">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
          <h3 className="email-header">Enter your email:</h3>
          <form role="form" className="form-inline"
                            onSubmit={this.handleEmail}>

              <div className="form-group">
                    <input className="form-control email-field"
                           type="text"
                           onChange={this.updateEmail}
                           value={this.state.email}>
                    </input>
                    <input className="btn btn-default"
                           type="submit"
                           value="GO"/>
                  </div>

          </form>
        </div>
      </div>
    );
  }
});
