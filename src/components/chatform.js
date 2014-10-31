/** @jsx React.DOM */

var React = require('react'),
    actions = require('../actions');

var Chatform = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var node = this.refs['field'].getDOMNode(),
        val = (node.value || ''),
        err = "";
    if (this.props.validate && (err=this.props.validate(val))){
      actions.error(err);
    } else {
      this.props.submit(val);
      node.value = '';
    }
    return false;
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='input-group'>
          <input className='form-control' type='text' ref='field'/>
          <span className='input-group-btn'>
            <button className='btn btn-default' type='submit'>Send!</button>
          </span>
        </div>
      </form>
    );
  }
});

module.exports = Chatform;