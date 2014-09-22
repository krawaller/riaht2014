/** @jsx React.DOM */

var React = require('react'),
    connect = require('../lib/reflux').connect,
    logStore = require('../stores/logstore'),
    actions = require('../actions'),
    _ = require('lodash');

var Console = React.createClass({
  mixins:[connect(logStore,"messages")],
  render: function(){
    var msgs = _.map((this.state||{}).messages||[],function(msg){
      return <li className={msg[2]}><span>{msg[0]}</span>{msg[1]}</li>;
    },this);
    return <div>
      <button onClick={actions.clearlog}>Clear log</button>
      <ul>{msgs}</ul>
    </div>;
  }
});

module.exports = Console;