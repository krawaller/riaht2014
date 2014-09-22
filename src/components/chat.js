/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    _ = require('lodash'),
    chatStore = require('../stores/chatstore'),
    chatcountStore = require('../stores/chatcountstore'),
    Form = require('./form'),
    Link = require('react-router').Link;

var Chat = React.createClass({
  mixins: [connect(chatStore,"messages"),connect(chatcountStore,"count")],
  getInitialState: function(){return {messages:{}};},
  render: function(){
    var messages = _.map(Object.keys(this.state.messages).reverse(),function(key){
      var val = this.state.messages[key];
      return <tr><td>{val.date}</td><td><Link to="user" params={{username:val.username}}>{val.username}</Link></td><td>{val.message}</td></tr>;
    },this);
    return (
      <div>
        <p>Total msg count: {this.state.count||0}</p>
        <Form />
        <table className='chat-table'>
          {messages}
        </table>
      </div>
    );
  }
});

module.exports = Chat;
