/** @jsx React.DOM */

var React = require('react'),
    Routes = require('react-router').Routes,
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    Chat = require('./chat'),
    Wrapper = require('./wrapper');

var App = (
  <Routes location="hash">
    <Route name="app" path="/" handler={Wrapper}>
      <Route name="chat" handler={Chat}/>
      <DefaultRoute handler={Chat}/>
    </Route>
  </Routes>
);
module.exports = App;