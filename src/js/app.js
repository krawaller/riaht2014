/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    Chat = require('./chat'),
    Form = require('./form'),
    loginStore = require('./loginstore'),
    actions = require('./actions');


var App = React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentDidMount: function(){
    this.listenTo(loginStore,this.loginUpdate);
  },
  loginUpdate: function(username){
    this.setState({username:username});
  },
  getInitialState: function(){return {};},
  render: function(){
    return this.state.username ?
      <div>
        <button onClick={function(){actions.logout();}}>log out {this.state.username}</button>
        <Form username={this.state.username} />
        <Chat />
      </div>
    : <button onClick={actions.login}>log in</button>;
  }
});
module.exports = App;
