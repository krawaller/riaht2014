/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    Firebase = require("firebase"),
    FirebaseSimpleLogin = require('../lib/firebase-simple-login'),
    Chat = require('./chat'),
    Form = require('./form'),
    ref = new Firebase("https://riaht2014.firebaseio.com/"),
    authRef = new Firebase("https://riaht2014.firebaseio.com/.info/authenticated");

var App = React.createClass({
  componentWillMount: function(){
    this.authClient = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        console.log(error);
      } else if (user) {
        this.setState({username:user.username});
      } else {
        // user is logged out
      }
    }.bind(this));
  	authRef.on("value",function(snapshot){
      this.setState({loggedin:snapshot.val()});
  	}.bind(this));
  },
  getInitialState: function(){return {};},
  catchClick: function(){
    if (this.state.loggedin){
      this.authClient.logout();
    } else {
      this.authClient.login("github");
    }
  },
  render: function(){
    return this.state.loggedin ?
      <div>
        <button onClick={this.catchClick}>log out {this.state.username}</button>
        <Form username={this.state.username} />
        <Chat />
      </div>
    : <button onClick={this.catchClick}>log in</button>;
  }
});
module.exports = App;
