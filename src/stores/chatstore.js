var Reflux = require('reflux'),
    Firebase = require("firebase"),
    chatRef = new Firebase("https://riaht2014.firebaseio.com/web/data/chat"),
    actions = require('../actions');

module.exports = Reflux.createStore({
  init: function(){
    chatRef.on("value",this.updateChat.bind(this));
    chatRef.limit(1).once("child_added",function(snap){
      this.trackfrom = snap.name();
      chatRef.limit(1).on("child_added",function(snap){
        if (snap.name()!==this.trackfrom){
          actions.newchatmessageloaded(snap.val());
        }
      }.bind(this));
    }.bind(this));
    this.listenTo(actions.sendchatmsg,this.addChatMsg.bind(this));
  },
  addChatMsg: function(msg){
    chatRef.push(msg,function(err){
      if (err){
        actions.error("Chat send failure: "+err);
      } else {
        actions.sendchatmsgsuccess(msg);
      }
    });
  },
  updateChat: function(snapshot){
    actions.chatdataloaded();
    this.trigger((this.last = snapshot.val()||{}));
  },
  getDefaultData: function(){
    return this.last || {};
  }
});