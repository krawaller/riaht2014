/** @jsx React.DOM */

var React = require('react'),
    connect = require('reflux').connect,
    logStore = require('../stores/logstore'),
    actions = require('../actions'),
    _ = require('lodash');

var Console = React.createClass({
  mixins:[connect(logStore,"messages")],
  render: function(){
    var msgs = _.map((this.state||{}).messages||[],function(msg){
      return <div className={msg[2]}><small><i>{msg[0].substr(0,5)}</i> {msg[1]}</small></div>;
    },this);
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          Log
          <button className='btn btn-default pull-right' onClick={actions.clearlog}>Clear log</button>
        </div>
        <div className='panel-body'>{msgs}</div>
      </div>
    );
  }
});

module.exports = Console;