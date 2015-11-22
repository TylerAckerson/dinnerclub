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
  }
};
