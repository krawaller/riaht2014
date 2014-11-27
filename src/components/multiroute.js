/** @jsx React.DOM */

var RouteHandler = require('react-router').RouteHandler;

//Multiroute is just an empty view that displays the activeRouteHandler. The point of this is to make two views sort under the same path so the same navbar item is active for both. Used in app.js for routes User and Users.

var React = require('react');

var Multiroute = React.createClass({
  render: function(){
    return <RouteHandler />;
  }
});

module.exports = Multiroute;
