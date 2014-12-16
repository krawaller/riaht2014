/** @jsx React.DOM */

var Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    Multiroute = require('./multiroute'),
    Chat = require('./chat'),
    Userlist = require('./userlist'),
    PullRequestList = require('./pullrequestlist'),
    User = require('./user'),
    Start = require('./start.js'),
    Wrapper = require('./wrapper');

//Multiroute is just an empty view that displays the activeRouteHandler, ie User or Userlist. The point of this is to make both of those views sort under the same path so that "users" are "active" in the navbar for both.
var App = (
  <Route name="app" path="/" handler={Wrapper}>
    <Route name="chat" handler={Chat}/>
    <Route name="users" handler={Multiroute}>
      <Route name="user" path=":username" handler={User}/>
      <DefaultRoute handler={Userlist}/>
    </Route>
    <Route name="pullrequests" handler={PullRequestList}/>
    <DefaultRoute name="start" handler={Start}/>
  </Route>
);
module.exports = App;
