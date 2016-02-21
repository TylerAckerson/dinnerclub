var ApiUtil = {
  fetchCurrentUser: function () {
    $.ajax({
      url: 'users/',
      success: function (current_user) {
        UserActions.receiveCurrentUser(current_user);
      }
    });
  },

  newUser: function (userEmail) {
    $.ajax({
      url: 'users/',
      type: 'POST',
      data: {user: { email: userEmail}},
      success: function (current_user) {
        UserActions.receiveCurrentUser(current_user);
      }
    });
  },

  createNewMeal: function (meal) {
    $.ajax({
      url: 'api/meals',
      type: 'POST',
      data: meal,
      success: function (meal) {
        MealActions.receiveMeal(meal);
      },
      failure: function (response) {
        console.log(response);
      }
    });
  },

  updateMeal: function (meal) {
    $.ajax({
      url: 'api/meals/' + meal.meal.id,
      type: 'PATCH',
      data: meal,
      success: function (updatedMeal) {
        MealActions.updateMeal(updatedMeal);
      },
      failure: function (response){
        console.log(response);
      }
    });
  },

  addAttendee: function (newAttendee) {
    $.ajax({
      url: '/api/attendees/new',
      type: 'POST',
      data: newAttendee,
      success: function (addedAttendee) {
        MealActions.addAttendees(addedAttendee);
      },
      failure: function (response){
        console.log(response);
      }
    });
  }
};
