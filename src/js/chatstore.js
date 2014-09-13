var Reflux = require('reflux'),
    Firebase = require("firebase"),
    chatRef = new Firebase("https://riaht2014.firebaseio.com/web/data/chat"),
    actions = require('./actions');

module.exports = Reflux.createStore({
  init: function(){
    this.updateChat = this.updateChat.bind(this);
    chatRef.on("value",this.updateChat);
    chatRef.on("child_added",this.updateChat);
    chatRef.on("child_removed",this.updateChat);
    chatRef.on("child_moved",this.updateChat);
    this.listenTo(actions.sendchatmsg,chatRef.push.bind(chatRef));
  },
  updateChat: function(snapshot){
    this.trigger(snapshot.val());
  },
  getDefaultData: function(){
    chatRef.once("value",this.updateChat);
  }
});