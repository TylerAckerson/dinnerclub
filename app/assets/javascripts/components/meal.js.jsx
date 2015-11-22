Meal = React.createClass({
  dummyMeal: function(){
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  render: function(){
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 meal">
            <h3 className="header">Your meal</h3>

            <AddAttendee />

            <h4>Attendee list</h4>
            <div className="row"> {
              this.dummyMeal().map(function(attendee){
                return <Attendee key={attendee} attendee={attendee} />;
              })
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
});
