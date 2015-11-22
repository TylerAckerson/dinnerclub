Meal = React.createClass({
  dummyMeal: function(){
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  render: function(){
    return (
      <div className="container text-center">
        <div className="row">
          <h2> Meal </h2>
        </div>
        <div className="row"> {
          this.dummyMeal().map(function(attendee){
            return <Attendee attendee={attendee} />;
          })
        }
        </div>
      </div>
    );
  }
});
