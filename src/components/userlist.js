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
    var users = _.map(this.state.users,function(user,key){
      return (
        <tr>
          <td><Link to="user" params={{username:key}}>{key}</Link></td>
          <td>{user.logins}</td>
          <td>{user.chats}</td>
          <td>{Object.keys(user.blogs||{}).length}</td>
          <td>{Object.keys(user.pulls||{}).length}</td>
        </tr>
      );
    },this);
    return (
      <div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Logins</th>
              <th>Chats</th>
              <th>Blogs</th>
              <th>Pulls</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Userlist;
