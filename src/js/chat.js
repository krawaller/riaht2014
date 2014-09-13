/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    _ = require('lodash'),
    chatStore = require('./chatstore');

var Chat = React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentDidMount: function(){
    this.listenTo(chatStore,this.setState,this.setState);
  },
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
