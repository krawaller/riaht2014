/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    listenTo = Reflux.listenTo,
    connect = Reflux.connect,
    userStore = require('../stores/userstore'),
    _ = require('lodash'),
    actions = require('../actions'),
    loginStore = require('../stores/loginstore');

var UserDataField = React.createClass({
  mixins: [listenTo(userStore,"getUserData","getUserData"),connect(loginStore,'username')],
  getInitialState: function(){return {val:""};},
  getUserData: function(users){
  	var val = _.reduce([this.props.username].concat(this.props.path.split("/")),function(memo,step){
      return memo[step];
  	},users);
  	this.setState({val:val});
  },
  startEdit: function(){
  	this.setState({editing:true});
  },
  save: function(e){
  	e.preventDefault();
    actions.updateuserfield(this.props.username,this.props.path,this.refs.input.getDOMNode().value);
    this.stopEdit();
    return false;
  },
  stopEdit: function(){
  	this.setState({editing:false});
  },
  delete: function(){
    actions.deleteuserfield(this.props.username,this.props.path);
  },
  render: function(){
    return this.state.editing ? (
      <form onSubmit={this.save}>
        <div className='input-group'>
          <input className='form-control' type='text' ref='input' defaultValue={this.state.val||""}/>
          <div className='input-group-btn'>
            <button className='btn btn-default' type='button' onClick={this.stopEdit}>Cancel</button>
            <button className='btn btn-default' type='submit'>Save</button>
          </div>
        </div>
      </form>
    ) : (
      <span>
        <span>{this.state.val}</span>
        {' '}
        {!this.props.surpressedit && this.state.username===this.props.username?
          <button className='btn btn-default btn-xs' type='button' onClick={this.startEdit}>Edit</button>:''}
        {' '}
        {!this.props.surpressedit && this.state.username===this.props.username && this.props.allowdelete?
          <button className='btn btn-danger btn-xs' type='button' onClick={this.delete}>Delete</button>:''}
      </span>
    );
  }
});

module.exports = UserDataField;
