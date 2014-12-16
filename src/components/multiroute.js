/** @jsx React.DOM */

//Multiroute is just an empty view that displays the activeRouteHandler. The point of this is to make two views sort under the same path so the same navbar item is active for both. Used in app.js for routes User and Users.

var React = require('react'),
	Router = require('react-router'),
	RouteHandler = Router.RouteHandler;

var Multiroute = React.createClass({
  render: function(){
    return <RouteHandler {...this.props} />;
  }
});

module.exports = Multiroute;
