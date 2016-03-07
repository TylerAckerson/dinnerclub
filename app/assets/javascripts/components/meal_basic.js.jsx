MealBasicInfo = React.createClass({
  getInitialState: function () {
    return MealStore.currentMeal();
  },

  _updateMeal: function () {
    this.setState( MealStore.currentMeal() );
  },

  _receiveMeal: function () {
    var newMeal = MealStore.currentMeal(),
        newMealUrl = "/meals/" + newMeal.id;

    // window.history.pushState(newMeal, null, newMealUrl);
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
    e.preventDefault();
    MealActions.updateMealTime(e.currentTarget.value);
  },

  runValidations: function () {
    hostName = this.validateHostName(this.state.host_name);
    mealLocation = this.validateLocation(this.state.meal_location);
    mealTime = this.validateDateTime(this.state.meal_time);

    return ( hostName && mealLocation && mealTime );
  },

  validateHostName: function (hostName) {
    if ( MealConstants.STRING_REGEXP.test(hostName) ) {
      $("#host-name").removeClass("invalid");
      return true;
    } else {
      $("#host-name").addClass("invalid");
      return false;
    }
  },

  validateLocation: function (mealLocation) {
    if ( MealConstants.STRING_REGEXP.test(mealLocation) ) {
      $("#location").removeClass("invalid");
      return true;
    } else {
      $("#location").addClass("invalid");
      return false;
    }
  },

  validateDateTime: function (dateTime) {
    if ( MealConstants.STRING_REGEXP.test(dateTime) ) {
      $("#date-time").removeClass("invalid");
      return true;
    } else {
      $("#date-time").addClass("invalid");
      return false;
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    if ( this.runValidations() ) {
      this.props.onSubmit(this.state);
      return true;
    }

    e.stopPropagation();
  },

  updateMeal: function (meal) {
    ApiUtil.updateMeal({ meal: meal });
  },

  render: function () {
    console.log(this.state);

    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h3 className="header">{this.props.header}</h3>
          <form>
            <input className="form-control"
                   type="text"
                   placeholder="Your name"
                   onChange={this.updateHostName}
                   value={this.state.host_name}
                   id="host-name"/>
            <input className="form-control"
                   type="text"
                   placeholder="Location"
                   onChange={this.updateLocation}
                   value={this.state.meal_location}
                   id="location"/>
            <input className="form-control"
                   type="text"
                   placeholder="Date and time"
                   onChange={this.updateMealTime}
                   value={this.state.meal_time}
                   id="date-time"/>
          </form>
          <button className="btn btn-primary create-meal top-buffer"
            onClick={this.handleSubmit}>
            {this.props.button}
          </button>
        </div>
      </div>
    );
  }
});
