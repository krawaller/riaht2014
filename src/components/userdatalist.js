/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    listenTo = Reflux.listenTo,
    connect = Reflux.connect,
    userStore = require('../stores/userstore'),
    _ = require('lodash'),
    actions = require('../actions'),
    loginStore = require('../stores/loginstore'),
    UserDataField = require('./userdatafield');

var UserDataList = React.createClass({
  mixins: [listenTo(userStore,"getUserData","getUserData"),connect(loginStore,'username')],
  getInitialState: function(){return {val:{}};},
  getUserData: function(users){
  	var val = _.reduce([this.props.username].concat(this.props.path.split("/")),function(memo,step){
      return memo[step];
  	},users) || {};
  	this.setState({val:val});
  },
  startEdit: function(){
  	this.setState({editing:true});
  },
  addItem: function(e){
  	e.preventDefault();
    var val = this.refs.input.getDOMNode().value;
    if (!val){
      actions.error("Cannot add empty list item!");

    } else {
      actions.adduserlistitem(this.props.username,this.props.path,val);
      this.stopEdit();
    }
    return false;
  },
  stopEdit: function(){
  	this.setState({editing:false});
  },
  render: function(){
    var lines = _.map(this.state.val,function(val,key){
      return <div key={key}><UserDataField username={this.props.username} path={this.props.path+"/"+key} surpressedit={!this.state.editing} allowdelete='true' /></div>;
    },this);
    return (
      <div className={this.state.editing?'panel panel-default':''}>
        {(lines.length?lines:[<div className='small'>list is empty</div>]).concat(this.state.editing&&this.props.username===this.state.username?(
          <div key='form'>
            <form className='panel-body' onSubmit={this.addItem}>
              <div className='input-group'>
                <input className='form-control' type='text' ref='input'/>
                <div className='input-group-btn'>
                  <button className='btn btn-default' type='submit'>Add</button>
                </div>
              </div>
            </form>
            <div className='panel-footer'>
              <button className='btn btn-default btn-xs' onClick={this.stopEdit}>Stop editing</button>
            </div>
          </div>
        ):(
          this.props.username===this.state.username?<button key='startedit' className='btn btn-default btn-xs' onClick={this.startEdit}>Edit list</button>:""
        ))}
      </div>
    );
  }
});

module.exports = UserDataList;
