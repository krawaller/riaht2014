/** @jsx React.DOM */

var React = require('react');

var Multiroute = React.createClass({
  render: function(){
    return this.props.activeRouteHandler();
  }
});

module.exports = Multiroute;
