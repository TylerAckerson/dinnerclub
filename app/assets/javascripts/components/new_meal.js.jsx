NewMeal = React.createClass({
  getInitialState: function(){

    return {
      host_name: "",
      meal_location: "",
      meal_time: "",
    };
  },

  _updateMeal: function(){
    this.setState( MealStore.currentMeal() );
  },

  _receiveMeal: function(){
    var newMeal = MealStore.currentMeal(),
        newMealUrl = "/meals/" + newMeal.id;

    // window.history.pushState(null, newMealUrl);
    window.location.hash = newMealUrl;
  },

  componentDidMount: function() {
    MealStore.addChangeListener(this._updateMeal);
    MealStore.addCreateListener(this._receiveMeal);

  },

  componentWillUnmount: function(){
    MealStore.addChangeListener(this._updateMeal);
    MealStore.removeCreateListener(this._receiveMeal);
  },

  updateHostName: function(e) {
    e.preventDefault();

    MealActions.updateHostName(e.currentTarget.value);
  },  

  updateLocation: function(e) {
    e.preventDefault();

    MealActions.updateLocation(e.currentTarget.value);
  },

  updateMealTime: function(e) {
    e.preventDefault;
    // var datetime;

    // if (e._isAMomentObject === true) {
    //   datetime = e.toDate();
    // }
    MealActions.updateMealTime(e.currentTarget.value);
  },

  handleNewMeal: function(e) {
    e.preventDefault();

    console.log(this.runValidations());

    if ( this.runValidations() ) {
      console.log("all validations passed");
      ApiUtil.createNewMeal({meal: this.state});
    } else {
      console.log("missing required information");
    }
  },

  runValidations: function() {
    hostName = this.validateHostName(this.state.host_name);
    mealLocation = this.validateLocation(this.state.meal_location);
    mealTime = this.validateDateTime(this.state.meal_time);

    return (hostName && mealLocation && mealTime);
  },

  validateHostName: function(hostName){
    if ( hostName.length ){
      return true
    } else {
      return false
    }
  },

  validateLocation: function(mealLocation){
    if ( typeof mealLocation === "undefined" || mealLocation.length < 3 ) {
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

  // validateAttendees: function(attendees){
  //   if ( typeof attendees === "undefined" || attendees.length === 0 ) {
  //     $("#email").addClass("invalid");
  //     return false;
  //   } else {
  //     $("#email").removeClass("invalid");
  //     return true;
  //   }
  // },

  // addAttendee: function(email) {
  //   MealActions.addAttendee(email);
  // },

  render: function(){
    console.log(this.state);
    // if (this.state.attendees[0] && this.state.attendees[0].id !== undefined){
    //   debugger;
    // }
          // <h3 className="top-buffer"> Attendees </h3>

          // <AddAttendee addAttendee={this.addAttendee} />

          // <table className="table top-buffer">
          //   <tbody>
          //   {
          //     this.state.attendees.map(function(attendee){
          //       return <Attendee key={attendee.email} attendee={attendee} />;
          //     })
          //   }
          //   </tbody>
          // </table>

                // <Datetime onChange={this.updateMealTime} />
    return (
      <div className="container text-center top-buffer">
        <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 meal">
        <MealBasicInfo header={"New Meal"} 
                       updateHostName={this.updateHostName.bind(this)}
                       updateLocation={this.updateLocation.bind(this)}
                       updateMealTime={this.updateMealTime.bind(this)}/>
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
