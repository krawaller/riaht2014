/** @jsx React.DOM */

var React = require('react'),
    Navlink = require('./navlink'),
    Loginbutton = require('./loginbutton');

var Topbar = React.createClass({
  render: function() {
    return (
      <div className='navbar navbar-default'>
        <ul className='nav nav-pills navbar-left' role='tablist'>
          <li><Navlink to="start">Home</Navlink></li>
          <li><Navlink to="users">Users</Navlink></li>
          <li><Navlink to="chat">Chat</Navlink></li>
          <li><Navlink to="pullrequests">Pull requests</Navlink></li>
        </ul>
        <div className='navbar-right'>
          <Loginbutton />
        </div>
      </div>
    );
  }
});

module.exports = Topbar;