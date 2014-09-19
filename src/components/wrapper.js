/** @jsx React.DOM */

var React = require('react'),
    Loginbutton = require('./loginbutton');

var Wrapper = React.createClass({
  render: function(){
    return (
      <div>
        <Loginbutton />
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});
module.exports = Wrapper;