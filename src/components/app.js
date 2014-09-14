/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('../lib/reflux'),
    connect = Reflux.connect,
    Chat = require('./chat'),
    Form = require('./form'),
    loginStore = require('../stores/loginstore'),
    messageStore = require('../stores/messagestore'),
    actions = require('../actions');



var App = React.createClass({
  mixins: [connect(loginStore,"username"),Reflux.listenTo(messageStore,"onMsg")],
  getInitialState: function(){return {};},
  onMsg: function(msg,type){
    console.log("RECEIVEDMSG",msg,type)
  },
  render: function(){
    return this.state.username ?
      <div>
        <button onClick={actions.initlogout}>log out {this.state.username}!</button>
        <Form username={this.state.username} />
        <Chat />
      </div>
    : <button onClick={actions.initlogin}>log in, moron!</button>;
  }
});
module.exports = App;
