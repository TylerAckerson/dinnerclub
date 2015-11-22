var UserActions = {
  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: user
    });
  }
};
