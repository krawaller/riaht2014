/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    messageStore = require('../stores/messageStore'),
    _ = require('lodash');

var Console = React.createClass({
  mixins:[connect(messageStore,"messages")],
  render: function(){
    var msgs = _.map((this.state||{}).messages||[],function(msg){
      return <li className={msg[2]}><span>{msg[0]}</span>{msg[1]}</li>;
    },this);
    return <ul>{msgs}</ul>;
  }
});

module.exports = Console;