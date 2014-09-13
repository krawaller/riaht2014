/** @jsx React.DOM */

var Firebase = require("firebase"),
    chatRef = new Firebase("https://riaht2014.firebaseio.com/web/data/chat"),
    moment = require('moment'),
    React = require('react');

var Form = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired
  },
  getInitialState: function(){
    return {error:''};
  },
  setError: function(msg){
    this.setState({error:msg});
    setTimeout(function(){this.setState({error:''});},2000);
  },
  submitChatMessage: function(e){
    var node = this.refs['msgfield'].getDOMNode(),
        msg = (node.value || '');
    if (!msg) {
      this.setError('Well, surely you have SOMETHING to say? Moron!');
    } else {
      this.sendMessage(msg);
      node.value = '';
    }
    return false;
  },
  sendMessage: function(msg){
    chatRef.push({
      username: this.props.username,
      date: moment().format('YYYY-MM-DD HH:mm'),
      message: msg
    });
  },
  render: function() {
    return (
      <form onSubmit={this.submitChatMessage}>
        <input type='text' ref='msgfield' />
        <button type='submit'>Send!</button>
        <p className='error' ref='errormsg'>{this.state.error}</p>
      </form>
    );
  }
});

module.exports = Form;