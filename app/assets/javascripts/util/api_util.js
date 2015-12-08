var ApiUtil = {
  newUser: function(userEmail){
    $.ajax({
      url: 'users/',
      type: 'POST',
      data: {user: { email: userEmail}},
      success: function(current_user){
        UserActions.receiveCurrentUser(current_user);
      }
    });
  },

  createNewMeal: function(meal){
    $.ajax({
      url: 'api/meals',
      type: 'POST',
      data: meal,
      success: function(meal){
        MealActions.receiveMeal(meal);
      },
      failure: function(response){
        console.log(response);
      }
    });
  }
};
