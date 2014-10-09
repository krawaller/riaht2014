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
      <div>
        <input type='text' ref='field' value={this.props.value||''} />
        <button onClick={this.onSubmit}>Send!</button>
      </div>
    );
  }
});

module.exports = Form;