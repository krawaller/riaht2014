/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    _ = require('lodash'),
    chatStore = require('../stores/chatstore');

var Chat = React.createClass({
  mixins: [connect(chatStore)],
  getInitialState: function(){return {};},
  render: function(){
    var messages = _.map(this.state,function(val,key){
      return <tr><td>{val.date}</td><td>{val.username}</td><td>{val.message}</td></tr>;
    },this);
    return (
      <table className='chat-table'>
        {messages}
      </table>
    );
  }
});
module.exports = Chat;
