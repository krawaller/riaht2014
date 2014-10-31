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
    this.listenTo(actions.adduserlistitem,"adduserlistitem");
    this.listenTo(actions.deleteuserfield,"deleteuserfield");
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
        actions.error("User field data update failed: "+err);
      } else {
        actions.updateuserfieldsuccess();
      }
    });
  },
  adduserlistitem: function(username,fieldname,data){
    dataRef.child(username).child(fieldname).push(data,function(err){
      if (err){
        actions.error("User field list add failed: "+err);
      } else {
        actions.adduserlistitemsuccess();
      }
    });
  },
  deleteuserfield: function(username,fieldname){
    dataRef.child(username).child(fieldname).remove(function(err){
      if (err){
        actions.error("User field removal failed: "+err);
      } else {
        actions.deleteuserfieldsuccess();
      }
    });
  },
  getDefaultData: function(){
    return this.last || {};
  }
});