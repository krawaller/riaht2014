/** @jsx React.DOM */

var React = require('react'),
    actions = require('../actions');

var Form = React.createClass({
  onSubmit: function(){
    var node = this.refs['field'].getDOMNode(),
        val = (node.value || ''),
        err = "";
    if (this.props.validate && (err=this.props.validate(val))){
      actions.error(err);
    } else {
      this.props.submit(val);
      node.value = '';
    }
  },
  render: function() {
    return (
      <div className='input-group'>
        <input className='form-control' type='text' ref='field' />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={this.onSubmit}>Send!</button>
        </span>
      </div>
    );
  }
});

module.exports = Form;