var Reflux = require('reflux'),
    Firebase = require("firebase"),
    dataRef = new Firebase("https://riaht2014.firebaseio.com/web/data/users"),
    actions = require('../actions');

module.exports = Reflux.createStore({
  init: function(){
    dataRef.on("value",this.transmitUserData.bind(this));
    this.listenTo(actions.sendchatmsgsuccess,this.updateUserChatCount.bind(this));
    this.listenTo(actions.finishlogin,this.updateUserLoginCount.bind(this));
    this.listenTo(actions.updateuserfield,"updateUserField");
  },
  transmitUserData: function(snapshot){
    actions.userdataloaded();
    this.trigger((this.last = snapshot.val()||{}),snapshot);
  },
  updateUserChatCount: function(msg){
    dataRef.child(msg.username+"/chats").transaction(function(count){return (count||0)+1;});
  },
  updateUserLoginCount: function(username){
    dataRef.child(username+"/logins").transaction(function(count){return (count||0)+1;});
  },
  updateUserField: function(username,fieldname,data){
    dataRef.child(username).child(fieldname).set(data,function(err){
      if (err){
        actions.error("User field save failed: "+err);
      } else {
        actions.updateuserfieldsuccess();
      }
    });
  },
  getDefaultData: function(){
    return this.last || {};
  }
});