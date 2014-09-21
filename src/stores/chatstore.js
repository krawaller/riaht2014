var Reflux = require('../lib/reflux'),
    Firebase = require("firebase"),
    chatRef = new Firebase("https://riaht2014.firebaseio.com/web/data/chat"),
    actions = require('../actions');

module.exports = Reflux.createStore({
  init: function(){
    this.updateChat = this.updateChat.bind(this);
    chatRef.on("value",this.updateChat);
    chatRef.on("child_added",function(snap){actions.newchatmessageloaded(snap.val());});
    this.listenTo(actions.sendchatmsg,this.addChatMsg.bind(this));
  },
  addChatMsg: function(msg){
    chatRef.push(msg,function(err){
      if (err){
        actions.error("Chat send failure: "+err);
      } else {
        actions.sendchatmsgsuccess();
      }
    });
  },
  updateChat: function(snapshot){
    actions.chatdataloaded();
    this.trigger((this.last = snapshot.val()||{}));
  },
  getDefaultData: function(){
    chatRef.once("value",this.updateChat);
    return this.last || {};
  }
});