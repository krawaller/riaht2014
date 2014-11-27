/** @jsx React.DOM */

//The purpose of this component is to make sure the <li> link element gets the `active` class
//as expected by bootstrap. See explanation [here](https://github.com/rackt/react-router/blob/master/docs/api/mixins/ActiveState.md)

var React = require('react');
var Link = require('react-router').Link;
var Router = require('react-router');

var Navlink = React.createClass({
  mixins: [ Router.State ],
  render: function() {
    var className = this.isActive(this.props.to, this.getParams(), this.getQuery()) ? 'active' : '';
    return <li className={className}>{Link(this.props)}</li>;
  }
});

module.exports = Navlink;
