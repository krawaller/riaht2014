var Reflux = require('../lib/reflux'),
    Firebase = require("firebase"),
    countRef = new Firebase("https://riaht2014.firebaseio.com/web/data/chatcount"),
    actions = require('../actions');

module.exports = Reflux.createStore({
  init: function(){
    countRef.on("value",this.transmitCount.bind(this));
    this.listenTo(actions.sendchatmsgsuccess,this.increaseCount.bind(this));
  },
  transmitCount: function(snapshot){
    this.trigger((this.last = snapshot.val()||0));
  },
  increaseCount: function(){
    countRef.transaction(function(count){return (count||0)+1;});
  },
  getDefaultData: function(){
    countRef.once("value",this.transmitCount.bind(this));
    return this.last || {};
  }
});