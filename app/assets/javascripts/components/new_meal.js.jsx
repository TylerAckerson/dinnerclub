NewMeal = React.createClass({
  getInitialState: function(){

    return {
      main_course: "",
      meal_time: "",
      attendees: []
    };
  },

  _updateMeal: function(){
    this.setState( MealStore.currentMeal() );
  },

  componentDidMount: function() {
    MealStore.addChangeListener(this._updateMeal);
  },

  componentWillUnmount: function(){
    MealStore.addChangeListener(this._updateMeal);
  },

  updateMainCourse: function(e) {
    e.preventDefault();
    // this.setState( { main_course: e.currentTarget.value } );
  },

  updateMealTime: function(e) {
    var date = e.toDate();
    // this.setState({ meal_time: date });
  },

  // handleNewMeal: function(e) {
  //   e.preventDefault();
  //   debugger;
  //   ApiUtil.handleNewMeal({meal: this.state});
  // },

  addAttendee: function(email) {
    MealActions.addAttendee(email);
  },

  // dummyMeal: function(){
  //   return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  // },

  render: function(){
    return (
      <div className="container text-center top-buffer">
        <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 meal">
          <div className="row">
            <div className="col-xs-6 col-xs-offset-3 col-sm-8 col-sm-offset-2">
              <h3 className="header"> New Meal </h3>
              <form>
                <input className="form-control"
                       type="text"
                       placeholder="What's cookin'?"
                       onChange={this.updateMainCourse}
                       id="pac-input"/>
                <Datetime onChange={this.updateMealTime} />
              </form>
            </div>
          </div>

          <h3 className="top-buffer"> Attendees </h3>

          <AddAttendee addAttendee={this.addAttendee} />

          <table className="table top-buffer">
            <tbody>
            {
              this.state.attendees.map(function(attendee){
                console.log(attendee);
                return <Attendee key={attendee} attendee={attendee} />;
              })
            }
            </tbody>
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
