/** @jsx React.DOM */

var React = require('react'),
    listenTo = require('reflux').listenTo,
    userStore = require('../stores/userstore');

var User = React.createClass({
  mixins: [listenTo(userStore,"getUserData","getUserData")],
  getUserData: function(users){
    var user = users[this.props.params.username];
    if (user){
      this.setState({found:true,user:user});
    } else {
      this.setState({found:false});
    }
  },
  render: function(){
    var name = this.props.params.username;
    return this.state && this.state.found ? <p>{name} is a nice dude!</p> : <p>Couldn't find user {name}.</p>;
  }
});

module.exports = User;
