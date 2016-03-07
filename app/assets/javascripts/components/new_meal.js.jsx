NewMeal = React.createClass({
  handleNewMeal: function (newMeal) {
    ApiUtil.createNewMeal( { meal: newMeal } );
  },

  render: function(){
    
    return (
      <div className="container text-center top-buffer">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 meal">
            <MealBasicInfo header={"New Dinner"} button={"Create"} onSubmit={this.handleNewMeal}/>
          </div>
        </div>
      </div>
    );
  }
});
