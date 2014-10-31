/** @jsx React.DOM */

var React = require('react'),
    connect = require('reflux').connect,
    loginStore = require('../stores/loginstore'),
    actions = require('../actions');

var Loginbutton = React.createClass({
  mixins: [connect(loginStore,"username")],
  getInitialState: function(){return {};},
  render: function(){
    var cls = 'btn btn-default navbar-btn';
    return this.state.username ?
      <button className={cls} onClick={actions.initlogout}>log out {this.state.username}</button>
      : <button className={cls} onClick={actions.initlogin}>log in</button>;
  }
});
module.exports = Loginbutton;