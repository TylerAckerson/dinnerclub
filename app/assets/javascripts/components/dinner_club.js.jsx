$(function() {
  'use strict';
  // console.warn = function (msg) {
  //   throw new Error(msg);
  // };

  var root = document.getElementById('application'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div>
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
        <IndexRoute component={CreateMeal}/>
        <Route path="/meals/new" component={NewMeal} />
        <Route path="/meals/:mealId" component={Meal} />
      </Route>
    </Router>
  );

  React.render(routes, root);
});
