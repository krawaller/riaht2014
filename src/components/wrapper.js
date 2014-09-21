/** @jsx React.DOM */

var React = require('react'),
    Loginbutton = require('./loginbutton'),
    Console = require('./console');

var Wrapper = React.createClass({
  render: function(){
    return (
      <div>
        <Loginbutton />
        {this.props.activeRouteHandler()}
        <Console />
      </div>
    );
  }
});
module.exports = Wrapper;