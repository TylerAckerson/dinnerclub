Meal = React.createClass({
  dummyMeal: function(){
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  render: function(){
    return (
      <div className="container text-center top-buffer">
        <MealBasicInfo header={"Your Meal"} 
                       updateHostName={this.updateHostName.bind(this)}
                       updateLocation={this.updateLocation.bind(this)}
                       updateMealTime={this.updateMealTime.bind(this)}/>
        <AddAttendee />

        <div className="row">
          <h3>Attendee list</h3>
          <table className="table">
            <div className="row"> {
              this.dummyMeal().map(function(attendee){
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
