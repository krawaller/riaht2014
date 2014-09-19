/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    loginStore = require('../stores/loginstore'),
    actions = require('../actions');

var Loginbutton = React.createClass({
  mixins: [connect(loginStore,"username")],
  getInitialState: function(){return {};},
  render: function(){
    return this.state.username ?
      <button onClick={actions.initlogout}>log out {this.state.username}</button>
      : <button onClick={actions.initlogin}>log in</button>;
  }
});
module.exports = Loginbutton;