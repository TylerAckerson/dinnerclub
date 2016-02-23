Meal = React.createClass({
  getInitialState: function () {
    var meal = MealStore.currentMeal();
    return {meal: meal};
  },

  dummyMeal: function () {
    return [
      {
        name: "Roo",
        phone: "732-919-0000"
      },
      {
        name: "Jeff",
        phone: "888-887-8989"
      },
      {
        name: "Andrew",
        phone: "313-448-8780"
      }
    ];
  },

  updateMeal: function (meal) {
    ApiUtil.updateMeal({meal: meal});
  },

  render: function () {
    return (
      <div className="container element text-center">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <MealBasicInfo header={"Your Meal"} button={"Update"} onSubmit={this.updateMeal}/>
          </div>
        </div>

        <div className="row">
          <AddAttendee mealId={this.state.meal.id}/>
          <h3>Attendee list</h3>
          <table className="table">
            <div className="row"> {
              this.dummyMeal().map(function (attendee) {
                return <Attendee key={attendee.phone} attendee={attendee} />;
              })
            }
            </div>
          </table>
        </div>
      </div>
    );
  }
});
