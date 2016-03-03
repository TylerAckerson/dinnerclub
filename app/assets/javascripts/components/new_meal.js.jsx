NewMeal = React.createClass({
  handleNewMeal: function (newMeal) {

    ApiUtil.createNewMeal( { meal: newMeal } );
  },

  // validateAttendees: function(attendees){
  //   if ( typeof attendees === "undefined" || attendees.length === 0 ) {
  //     $("#email").addClass("invalid");
  //     return false;
  //   } else {
  //     $("#email").removeClass("invalid");
  //     return true;
  //   }
  // },

  render: function(){
    // <Datetime onChange={this.updateMealTime} />
    
    return (
      <div className="container text-center top-buffer">
        <div className="row meal">
          <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
            <MealBasicInfo header={"New Meal"} button={"Create Meal"} onSubmit={this.handleNewMeal}/>
          </div>
        </div>
      </div>
    );
  }
});
