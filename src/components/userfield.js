/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    listenTo = Reflux.listenTo,
    connect = Reflux.connect,
    userStore = require('../stores/userstore'),
    _ = require('lodash'),
    actions = require('../actions'),
    loginStore = require('../stores/loginstore');

var UserField = React.createClass({
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
  render: function(){
    return this.state.editing ? (
      <form style={{display:'inline-block'}} onSubmit={this.save}>
        <input type='text' ref='input' defaultValue={this.state.val||""}/>
        {' '}<button className='btn btn-default btn-xs' type='button' onClick={this.stopEdit}>Cancel</button>
        {' '}<button className='btn btn-default btn-xs' type='submit'>Save</button>
      </form>
    ) : (
      <span>
        <span>{this.state.val}</span>
        {' '}
        {this.state.username===this.props.username?
          <button className='btn btn-default btn-xs' type='button' onClick={this.startEdit}>Edit</button>:''}
      </span>
    );
  }
});

module.exports = UserField;
