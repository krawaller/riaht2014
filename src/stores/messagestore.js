var Reflux = require('../lib/reflux'),
    actions = require('../actions'),
    _ = require('lodash');

module.exports = Reflux.createStore({
  messages: {
    newchatmessageloaded: ["New chat message by %S","net","username"],
    chatdataloaded: ["Loaded chat data","net"],
    initlogin: ["Started login sequence","loc"],
    finishlogin: ["Logged in as %S","net"],
    initlogout: ["Started logout sequence","loc"],
    finishlogout: ["Finished logout","net"]
  },
  init: function(){
    this.triggerMessage = _.bind(this.triggerMessage,this);
    for (var m in this.messages){
      this.listenTo(actions[m],_.partial(this.triggerMessage,this.messages[m]));
    }
    console.log("Message store initialized");
  },
  triggerMessage: function(def,data){
    if (def[2]){
      data = (data||{})[def[2]];
    }
    this.trigger(def[0].replace("%S",data),def[1]);
  }
});