Navbar = React.createClass({
  render: function(){
    return (
      <nav className="navbar navbar-default" id="app-navbar">
        <div className="container-fluid">
          <button type="button" className="navbar-toggle collapsed"
                  data-toggles="collapse" data-target="collapse-menu"
                  aria-expanded="false">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        
        <div className="navbar-header" id="header-logo">
          <a className="navbar-brand" href="/">
            <img src="https://dl.dropboxusercontent.com/u/4448887/Dinner%20Club-logo.png"
                 className="img" width="120" height="50"/>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="collapse-menu">
          <ul className="nav navbar-nav pull-right">
            <li><a href="/">Home</a></li>
          </ul>
        </div>

      </nav>
    );
  }
});
