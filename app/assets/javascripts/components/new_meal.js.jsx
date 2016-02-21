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

  // addAttendee: function(email) {
  //   MealActions.addAttendee(email);
  // },

  render: function(){
    // if (this.state.attendees[0] && this.state.attendees[0].id !== undefined){
    //   debugger;
    // }
          // <h3 className="top-buffer"> Attendees </h3>

          // <AddAttendee addAttendee={this.addAttendee} />

          // <table className="table top-buffer">
          //   <tbody>
          //   {
          //     this.state.attendees.map(function(attendee){
          //       return <Attendee key={attendee.email} attendee={attendee} />;
          //     })
          //   }
          //   </tbody>
          // </table>

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
