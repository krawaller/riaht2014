var Reflux = require('../lib/reflux'),
    Firebase = require("firebase"),
    dataRef = new Firebase("https://riaht2014.firebaseio.com/web/data/users"),
    actions = require('../actions');

module.exports = Reflux.createStore({
  init: function(){
    dataRef.on("value",this.transmitUserData.bind(this));
    this.listenTo(actions.sendchatmsgsuccess,this.updateUserChatCount.bind(this));
    this.listenTo(actions.finishlogin,this.updateUserLoginCount.bind(this));
  },
  transmitUserData: function(snapshot){
    actions.userdataloaded();
    this.trigger((this.last = snapshot.val()||{}));
  },
  updateUserChatCount: function(msg){
    dataRef.child(msg.username).child("chats").transaction(function(count){return (count||0)+1;});
  },
  updateUserLoginCount: function(username){
    dataRef.child(username).child("logins").transaction(function(count){return (count||0)+1;});
  },
  getDefaultData: function(){
    dataRef.once("value",this.transmitUserData.bind(this));
    return this.last || {};
  }
});