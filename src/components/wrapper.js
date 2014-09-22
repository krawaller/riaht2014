/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    Loginbutton = require('./loginbutton'),
    Console = require('./console');

var Wrapper = React.createClass({
  render: function(){
    return (
      <div>
        <ul>
          <li><Link to="users">Users</Link></li>
          <li><Link to="chat">Chat</Link></li>
        </ul>
        <Loginbutton />
        {this.props.activeRouteHandler()}
        <Console />
      </div>
    );
  }
});
module.exports = Wrapper;