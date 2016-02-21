MealBasicInfo = React.createClass({

  render: function(){
    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <h3 className="header">{this.props.header}</h3>
          <form>
            <input className="form-control"
                   type="text"
                   placeholder="Your name"
                   onChange={this.props.updateHostName}
                   id="pac-input"/>
            <input className="form-control"
                   type="text"
                   placeholder="Location"
                   onChange={this.props.updateLocation}
                   id="pac-input"/>
            <input className="form-control"
                   type="text"
                   placeholder="Date and time"
                   onChange={this.props.updateMealTime}
                   id="pac-input"/>
          </form>
        </div>
      </div>
    );
  }
});