NewMeal = React.createClass({
  getInitialState: function(){
    return {
      maxAttendees: "",
      mainCourse: "",
      mealTime: ""
    };
  },

  updateEmail: function(e) {
    e.preventDefault();
    this.setState( { email: e.currentTarget.value } );
  },

  render: function(){
    return (
      <div className="row">
        <div className="display-box panel panel-default panel-body">
          <div className="clearfix box-top">
            <button type="button"
                  className="btn btn-default remove"
                  aria-label="Right Align">
                  <span className="glyphicon glyphicon-remove"
                        aria-hidden="true">
                  </span>
            </button>
          </div>
          <h3>Create an Activity!</h3>
          <form>
            <div>
              < Datetime onChange={this.updateStartTime}/>
            </div>
            <div className="activity-form">
              <textarea className="form-control"
                        onChange={this.updateActivityDescription}
                        rows="4"
                        placeholder="Description...">
              </textarea>
            </div>

          </form>
          <button className="submit-button btn btn-default btn-lg"
                  onClick={this.handleNewActivity}>
                  Create New Activity
          </button>
        </div>
      </div>
    );
  }
});
