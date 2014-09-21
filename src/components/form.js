/** @jsx React.DOM */

var moment = require('moment'),
    React = require('react'),
    actions = require('../actions'),
    connect = require('../lib/reflux').connect,
    loginStore = require('../stores/loginstore');

var Form = React.createClass({
  mixins: [connect(loginStore,'username')],
  submitChatMessage: function(e){
    var node = this.refs['msgfield'].getDOMNode(),
        msg = (node.value || '');
    if (!this.state.username){
      actions.error("Must be logged in to chat!");
    } else if (!msg) {
      actions.error('Must say something!');
    } else {
      this.sendMessage(msg);
      node.value = '';
    }
    return false;
  },
  sendMessage: function(msg){
    actions.sendchatmsg({
      username: this.state.username,
      date: moment().format('YYYY-MM-DD HH:mm'),
      message: msg
    });
  },
  render: function() {
    return (
      <form onSubmit={this.submitChatMessage}>
        <input type='text' ref='msgfield' />
        <button type='submit'>Send!</button>
      </form>
    );
  }
});

module.exports = Form;