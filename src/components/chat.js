/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    _ = require('lodash'),
    chatStore = require('../stores/chatstore'),
    chatcountStore = require('../stores/chatcountstore'),
    Form = require('./form');

var Chat = React.createClass({
  mixins: [connect(chatStore,"messages"),connect(chatcountStore,"count")],
  getInitialState: function(){return {};},
  render: function(){
    var messages = _.map(this.state.messages,function(val,key){
      return <tr><td>{val.date}</td><td>{val.username}</td><td>{val.message}</td></tr>;
    },this);
    return (
      <div>
        <p>Total msg count: {this.state.count||0}</p>
        <table className='chat-table'>
          {messages}
        </table>
        <Form />
      </div>
    );
  }
});

module.exports = Chat;
