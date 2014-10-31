/** @jsx React.DOM */

var Routes = require('react-router').Routes,
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    Multiroute = require('./multiroute'),
    Chat = require('./chat'),
    Userlist = require('./userlist'),
    User = require('./user'),
    Start = require('./start.js'),
    Wrapper = require('./wrapper');

var App = (
  <Routes location="hash">
    <Route name="app" path="/" handler={Wrapper}>
      <Route name="chat" handler={Chat}/>
      <Route name="users" handler={Multiroute}>
        <Route name="user" path=":username" handler={User}/>
        <DefaultRoute handler={Userlist}/>
      </Route>
      <DefaultRoute name="start" handler={Start}/>
    </Route>
  </Routes>
);
module.exports = App;