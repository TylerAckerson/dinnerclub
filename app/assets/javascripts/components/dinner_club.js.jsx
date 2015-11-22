$(function() {
  'use strict';
  // console.warn = function (msg) {
  //   throw new Error(msg);
  // };

  var root = document.getElementById('application');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div>
          <Navbar/>
          <div id="container">
            {this.props.children}
          </div>
        </div>
      );
    }
  });

  var routes = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn} />
        <Route path="new" component="NewMeal" />
      </Route>
    </Router>
  );

  React.render(routes, root);
});
