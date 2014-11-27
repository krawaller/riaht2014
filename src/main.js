/** @jsx React.DOM */

var App = require('./components/app'),
    React = require('react'),
    Router = require('react-router');

Router.run(App, function (Handler, state) {
  React.render(
    <Handler params={state.params} query={state.query} />,
    document.querySelector('body'));
});
