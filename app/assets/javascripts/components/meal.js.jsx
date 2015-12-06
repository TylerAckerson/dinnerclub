Meal = React.createClass({
  dummyMeal: function(){
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  render: function(){
    return (
      <div className="container text-center top-buffer">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 meal">
            <h3 className="header">Meal</h3>
            <AddAttendee />

            <h3>Attendee list</h3>
            <table className="table">
              <div className="row"> {
                this.dummyMeal().map(function(attendee){
                  return <Attendee key={attendee} attendee={attendee} />;
                })
              }
              </div>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
