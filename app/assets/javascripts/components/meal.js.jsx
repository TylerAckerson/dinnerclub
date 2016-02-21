Meal = React.createClass({
  dummyMeal: function () {
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  updateMeal: function (meal) {
    ApiUtil.updateMeal({meal: meal});
  },

  render: function () {
    return (
      <div className="container text-center top-buffer">
        <MealBasicInfo header={"Your Meal"} button={"Update"} onSubmit={this.updateMeal}/>
        <AddAttendee />

        <div className="row">
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
