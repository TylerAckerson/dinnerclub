MealBasicInfo = React.createClass({
  getInitialState: function () {

    return {
      host_name: "",
      meal_location: "",
      meal_time: "",
    };
  },

  _updateMeal: function () {
    this.setState( MealStore.currentMeal() );
  },

  _receiveMeal: function () {
    var newMeal = MealStore.currentMeal(),
        newMealUrl = "/meals/" + newMeal.id;

    // window.history.pushState(null, newMealUrl);
    window.location.hash = newMealUrl;
  },

  componentDidMount: function () {
    MealStore.addChangeListener(this._updateMeal);
    MealStore.addCreateListener(this._receiveMeal);

  },

  componentWillUnmount: function () {
    MealStore.addChangeListener(this._updateMeal);
    MealStore.removeCreateListener(this._receiveMeal);
  },

  updateHostName: function (e) {
    e.preventDefault();

    MealActions.updateHostName(e.currentTarget.value);
  },  

  updateLocation: function (e) {
    e.preventDefault();

    MealActions.updateLocation(e.currentTarget.value);
  },

  updateMealTime: function (e) {
    e.preventDefault;
    // var datetime;

    // if (e._isAMomentObject === true) {
    //   datetime = e.toDate();
    // }
    MealActions.updateMealTime(e.currentTarget.value);
  },

  runValidations: function () {
    hostName = this.validateHostName(this.state.host_name);
    mealLocation = this.validateLocation(this.state.meal_location);
    mealTime = this.validateDateTime(this.state.meal_time);

    return (hostName && mealLocation && mealTime);
  },

  validateHostName: function (hostName) {
    if ( hostName.length ){
      return true
    } else {
      return false
    }
  },

  validateLocation: function (mealLocation) {
    if ( typeof mealLocation === "undefined" || mealLocation.length < 3 ) {
      $("#pac-input").addClass("invalid");
      return false;
    } else {
      $("#pac-input").removeClass("invalid");
      return true;
    }
  },

  validateDateTime: function (date_time) {
    if ( typeof date_time === "undefined" || date_time.length === 0 ) {
      $(".rdt input.form-control").addClass("invalid");
      return false;
    } else {
      $(".rdt input.form-control").removeClass("invalid");
      return true;
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  },

  render: function () {
    console.log(this.state);  
    return (
      <div className="row" runValidations={this.runValidations}>
        <div className="col-sm-8 col-sm-offset-2">
          <h3 className="header">{this.props.header}</h3>
          <form>
            <input className="form-control"
                   type="text"
                   placeholder="Your name"
                   onChange={this.updateHostName}
                   id="pac-input"/>
            <input className="form-control"
                   type="text"
                   placeholder="Location"
                   onChange={this.updateLocation}
                   id="pac-input"/>
            <input className="form-control"
                   type="text"
                   placeholder="Date and time"
                   onChange={this.updateMealTime}
                   id="pac-input"/>
          </form>
          <button className="btn btn-primary create-meal"
            onClick={this.handleSubmit}>
            {this.props.button}
          </button>
        </div>
      </div>
    );
  }
});