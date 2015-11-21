SignIn = React.createClass({

  handleEmail: function(){

  },

  render: function(){
      return (
        <div className="row sign-in text-center">
          <div className="col-xs-6 col-xs-offset-3">
            <h3>Enter your email:</h3>
            <form role="form" className="form-inline"
                              onSubmit={this.handleEmail}>

                <div className="form-group">
                      <input className="form-control"
                             type="text">
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
