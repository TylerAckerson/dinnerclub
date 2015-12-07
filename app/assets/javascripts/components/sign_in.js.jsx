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
    }

    setTimeout(function(){
      $('#sign-up-success').removeClass("hide");
    }, 1000);

    setTimeout(function(){
      $('#sign-up-success').addClass("hide");
    }, 3000);

    userEmail = this.state.email;
    ApiUtil.newUser(userEmail);
  },


  render: function(){
    return (
      <div>
      <div className="row text-center top-buffer sign-in">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
          <h3 className="header">Enter your email:</h3>
          <form role="form" className="form-inline"
                            onSubmit={this.handleEmail}>

              <div className="form-group">
                    <input className="form-control email-field"
                           type="text"
                           onChange={this.updateEmail}
                           value={this.state.email}>
                    </input>
                    <input className="btn btn-primary"
                           type="submit"
                           value="GO"/>
                  </div>

          </form>
        </div>
      </div>

      <div className="row text-center">

        <div id="sign-up-success" className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 hide">
          <div className="sign-up-success-border-top"/>
            <p>You&#39;ve been placed on the waiting list!</p>
          <div className="sign-up-success-border-bottom"/>
        </div>
      </div>

      </div>
    );
  }
});
