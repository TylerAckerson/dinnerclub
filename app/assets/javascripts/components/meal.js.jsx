Meal = React.createClass({
  getInitialState: function () {
    var meal = MealStore.currentMeal();
    return {meal: meal};
  },

  dummyMeal: function () {
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  updateMeal: function (meal) {
    ApiUtil.updateMeal({meal: meal});
  },

  render: function () {
    return (
      <div className="container element text-center">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
            <MealBasicInfo header={"Your Meal"} button={"Update"} onSubmit={this.updateMeal}/>
          </div>
        </div>

        <div className="row">
          <AddAttendee mealId={this.state.meal.id}/>
          <h3>Attendee list</h3>
          <table className="table">
            <div className="row"> {
              this.dummyMeal().map(function (attendee) {
                return <Attendee key={attendee.email} attendee={attendee} />;
              })
            }
            </div>
          </table>
        </div>
      </div>
    );
  }
});
