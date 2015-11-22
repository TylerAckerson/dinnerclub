NewMeal = React.createClass({
  getInitialState: function(){
    return {
      max_attendees: "",
      main_course: "",
      meal_time: ""
    };
  },

  updateMainCourse: function(e) {
    e.preventDefault();
    this.setState( { main_course: e.currentTarget.value } );
  },

  updateMaxAttendees: function(e) {
    e.preventDefault();
    this.setState( { max_attendees: e.currentTarget.value } );
  },

  updateMealTime: function(e) {
    var date = e.toDate();
    this.setState({ meal_time: date });
  },

  handleNewMeal: function(e) {
    e.preventDefault();
    debugger;
    ApiUtil.handleNewMeal({meal: this.state});
  },

  render: function(){
    return (
      <div className="container text-center">
        <div className="row">
          <h2> New Meal </h2>
        </div>
        <div className="display-box">
          <form>
            <input className="form-control"
                   type="text"
                   placeholder="What's cookin'?"
                   onChange={this.updateMainCourse}
                   id="pac-input"/>
            <input className="form-control"
                   type=""
                   placeholder="How many are attending?"
                   onChange={this.updateMaxAttendees}
                   id="pac-input"/>
            < Datetime onChange={this.updateMealTime} />
          </form>
          <button className="btn btn-default btn-lg"
            onClick={this.handleNewMeal}>
            New Meal
          </button>
        </div>
      </div>
    );
  }
});
