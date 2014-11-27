/** @jsx React.DOM */

var React = require('react'),
    Topbar = require('./topbar'),
    Console = require('./console'),
    RouteHandler = require('react-router').RouteHandler;

var Wrapper = React.createClass({
  render: function(){
    return (
      <div className='container'>
        <div className='row'>
          <Topbar />
        </div>
        <div className='row'>
          <div className='col-md-9'>
            <RouteHandler />
          </div>
          <div className='col-md-3'>
            <Console />
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Wrapper;
