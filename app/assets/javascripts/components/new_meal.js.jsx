NewMeal = React.createClass({
  getInitialState: function(){

    return {
      main_course: "",
      meal_time: "",
      attendees: []
    };
  },

  updateMainCourse: function(e) {
    e.preventDefault();
    this.setState( { main_course: e.currentTarget.value } );
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

  addAttendee: function(email) {
    newAttendees = this.state.attendees;
    newAttendees.push(email);
    newState = $.extend(this.state, {attendees: newAttendees});

    this.setState(newState);
  },

  // dummyMeal: function(){
  //   return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  // },

  render: function(){
    return (
      <div className="container text-center top-buffer">
        <div className="row">
        <div className="col-sm-6 col-sm-offset-3 meal">
          <h3 className="header"> New Meal </h3>
          <form>
            <input className="form-control"
                   type="text"
                   placeholder="What's cookin'?"
                   onChange={this.updateMainCourse}
                   id="pac-input"/>
            <Datetime onChange={this.updateMealTime} />
          </form>

          <h3 className="top-buffer"> Attendees </h3>

          <AddAttendee addAttendee={this.addAttendee} />

          <table className="table top-buffer"> {
              this.state.attendees.map(function(attendee){
                return <Attendee key={attendee} attendee={attendee} />;
              })
            }
          </table>

          <button className="btn btn-primary create-meal"
            onClick={this.handleNewMeal}>
            Create Meal
          </button>
        </div>
        </div>
      </div>
    );
  }
});
