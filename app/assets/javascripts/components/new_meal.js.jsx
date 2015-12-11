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
    MealActions.updateMainCourse(e.currentTarget.value);
  },

  updateMealTime: function(e) {
    var datetime;

    if (e._isAMomentObject === true) {
      datetime = e.toDate();
      MealActions.updateMealTime(datetime);
    }
  },

  handleNewMeal: function(e) {
    e.preventDefault();

    if ( this.runValidations() ) {
      ApiUtil.createNewMeal({meal: this.state});
    } else {
      console.log("missing required information");
    }
  },

  runValidations: function() {
    main = this.validateMainDish(this.state.main_course);
    date = this.validateDateTime(this.state.meal_time);
    attendees = this.validateAttendees(this.state.attendees);

    return (main && date && attendees);
  },

  validateMainDish: function(main_dish){
    if ( typeof main_dish === "undefined" || main_dish.length < 3 ) {
      $("#pac-input").addClass("invalid");
      return false;
    } else {
      $("#pac-input").removeClass("invalid");
      return true;
    }
  },

  validateDateTime: function(date_time){
    if ( typeof date_time === "undefined" || date_time.length === 0 ) {
      $(".rdt input.form-control").addClass("invalid");
      return false;
    } else {
      $(".rdt input.form-control").removeClass("invalid");
      return true;
    }
  },

  validateAttendees: function(attendees){
    if ( typeof attendees === "undefined" || attendees.length === 0 ) {
      $("#email").addClass("invalid");
      return false;
    } else {
      $("#email").removeClass("invalid");
      return true;
    }
  },

  addAttendee: function(email) {
    MealActions.addAttendee(email);
  },

  render: function(){
    // if (this.state.attendees[0] && this.state.attendees[0].id !== undefined){
    //   debugger;
    // }

    return (
      <div className="container text-center top-buffer">
        <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 meal">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
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
                return <Attendee key={attendee.email} attendee={attendee} />;
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
