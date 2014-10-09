/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    _ = require('lodash'),
    chatStore = require('../stores/chatstore'),
    chatcountStore = require('../stores/chatcountstore'),
    loginStore = require('../stores/loginstore'),
    Form = require('./form'),
    Link = require('react-router').Link,
    moment = require('moment'),
    actions = require('../actions');

var Chat = React.createClass({
  mixins: [connect(chatStore,"messages"),connect(chatcountStore,"count"),connect(loginStore,'username')],
  getInitialState: function(){return {messages:{}};},
  validateMessage: function(content){
    if (!this.state.username){
      return "Must be logged in to chat!";
    } else if (!content) {
      return 'Must say something!';
    }
  },
  sendMessage: function(msg){
    actions.sendchatmsg({
      username: this.state.username,
      date: moment().format('YYYY-MM-DD HH:mm'),
      message: msg
    });
  },
  render: function(){
    var messages = _.map(Object.keys(this.state.messages).reverse(),function(key){
      var val = this.state.messages[key];
      return <tr><td>{val.date}</td><td><Link to="user" params={{username:val.username}}>{val.username}</Link></td><td>{val.message}</td></tr>;
    },this);
    return (
      <div>
        <p>Total msg count: {this.state.count||0}</p>
        <Form validate={this.validateMessage} submit={this.sendMessage} />
        <table className='chat-table'>
          {messages}
        </table>
      </div>
    );
  }
});

module.exports = Chat;
