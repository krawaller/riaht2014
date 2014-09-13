/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    Firebase = require("firebase"),
    ref = new Firebase("https://riaht2014.firebaseio.com/web/data/chat"),
    _ = require('lodash');

var Chat = React.createClass({
  componentWillMount: function(){
    this.updateFromSnapshot = this.updateFromSnapshot.bind(this);
    ref.on("value",this.updateFromSnapshot);
    ref.on("child_added",this.updateFromSnapshot);
    ref.on("child_removed",this.updateFromSnapshot);
    ref.on("child_moved",this.updateFromSnapshot);
  },
  updateFromSnapshot: function(snapshot){
    this.setState(snapshot.val());
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
