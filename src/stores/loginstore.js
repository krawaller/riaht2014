var Reflux = require('../lib/reflux'),
    Firebase = require("firebase"),
    FirebaseSimpleLogin = require('../lib/firebase-simple-login'),
    ref = new Firebase("https://riaht2014.firebaseio.com/"),
    authRef = new Firebase("https://riaht2014.firebaseio.com/.info/authenticated"),
    actions = require('../actions'),
    _ = require('lodash');

module.exports = Reflux.createStore({
  init: function(){
    this.authClient = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        console.log(error);
      } else if (user) {
        actions.finishlogin(user.username);
        this.trigger(user.username);
      } else {
        this.trigger(false);
      }
    }.bind(this));
    authRef.on("value",function(snapshot){
      if (!snapshot.val()){
        actions.finishlogout();
        this.trigger(false);
      }
    }.bind(this));
    this.listenTo(actions.initlogin,function(){this.authClient.login("github");});
    this.listenTo(actions.initlogout,function(){this.authClient.logout();});
  }
});