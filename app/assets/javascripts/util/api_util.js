var ApiUtil = {
  newUser: function(userEmail){
    debugger;
    $.ajax({
      url: 'users',
      type: 'POST',
      data: { user_email: userEmail},
      success: function(current_user){
        UserActions.receiveNewUser(current_user);
      }
    });
  }
};
