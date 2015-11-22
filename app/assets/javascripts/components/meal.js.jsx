Meal = React.createClass({
  dummyMeal: function(){
    return ['tyler@tyler.tyler', 'jeff@jeff.jeff', 'andrew@andrew.andrew'];
  },

  render: function(){
    return (
      <div className="container">
        <div className="row text-center"> {
          this.dummyMeal().map(function(attendee){
            return <Attendee attendee={attendee} />;
          })
        }
        </div>
      </div>
    );
  }
});
