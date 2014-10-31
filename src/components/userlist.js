/** @jsx React.DOM */

var React = require('react'),
    connect = require('reflux').connect,
    _ = require('lodash'),
    userStore = require('../stores/userstore'),
    Link = require('react-router').Link;

var Userlist = React.createClass({
  mixins: [connect(userStore,"users")],
  getInitialState: function(){return {};},
  render: function(){
    console.log("RENDER IN USERLIST");
    var users = _.map(this.state.users,function(user,key){
      return <tr><td><Link to="user" params={{username:key}}>{key}</Link></td><td>Logins:{user.logins}</td><td>Chats:{user.chats}</td></tr>;
    },this);
    console.log("here be the stuff",users);
    return (
      <div>
        <table className='user-table'>
          {users}
        </table>
      </div>
    );
  }
});

module.exports = Userlist;
