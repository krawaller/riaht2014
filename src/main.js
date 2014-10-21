/** @jsx React.DOM */

var App = require('./components/app'),
    React = require('react');

React.renderComponent(
  App,
  document.getElementById('main'));