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

  updateHostNumber: function (e) {
    e.preventDefault();
    MealActions.updateHostNumber(e.currentTarget.value);
  },

  updateActivity: function (e) {
    e.preventDefault();
    MealActions.updateActivity(e.currentTarget.value);
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
    hostNumber = this.validateHostNumber(this.state.host_number);
    activity = this.validateActivity(this.state.activity);
    mealLocation = this.validateLocation(this.state.meal_location);
    mealTime = this.validateDateTime(this.state.meal_time);

    return ( hostName && hostNumber && mealLocation && mealTime );
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

  validateHostNumber: function (hostNumber) {

    number_regexp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if ( number_regexp.test(hostNumber) ) {
      $("#host-number").removeClass("invalid");
      return true;
    } else {
      $("#host-number").addClass("invalid");
      return false;
    }
  },

  validateActivity: function (activity) {
    if ( MealConstants.STRING_REGEXP.test(activity) ) {
      $("#activity").removeClass("invalid");
      return true;
    } else {
      $("#activity").addClass("invalid");
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
                   placeholder="Your phone number"
                   onChange={this.updateHostNumber}
                   value={this.state.host_number}
                   id="host-number"/>
            <input className="form-control"
                   type="text"
                   placeholder="Type of Activity"
                   onChange={this.updateActivity}
                   value={this.state.activity}
                   id="activty"/>

            <div class="control-group">
               <select id="select-beast" class="demo-default" placeholder="Select a person...">
                 <option value="">Select a person...</option>
                 <option value="4">Thomas Edison</option>
                 <option value="1">Nikola</option>
                 <option value="3">Nikola Tesla</option>
                 <option value="5">Arnold Schwarzenegger</option>
               </select>
             </div>

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
