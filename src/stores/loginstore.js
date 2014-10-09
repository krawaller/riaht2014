var Reflux = require('../lib/reflux'),
    Firebase = require("firebase"),
    FirebaseSimpleLogin = require('../lib/firebase-simple-login'),
    ref = new Firebase("https://riaht2014.firebaseio.com/"),
    authRef = new Firebase("https://riaht2014.firebaseio.com/.info/authenticated"),
    actions = require('../actions'),
    _ = require('lodash'),
    users = require('./users.json');

module.exports = Reflux.createStore({
  init: function(){
    this.authClient = new FirebaseSimpleLogin(ref, function(error, user) {
      if (error) {
        actions.error("Login error: "+error)
      } else if (user) {
          if (users.indexOf(user.username)!==-1){
            actions.finishlogin(user.username);
            this.trigger((this.last = user.username));
          } else {
            actions.error("Github user '"+user.username+"' isn't a member here. Add to the users.json array and do a pull request!");
          }
      } else {
        this.trigger((this.last = false));
      }
    }.bind(this));
    authRef.on("value",function(snapshot){
      if (!snapshot.val()){
        actions.finishlogout();
        this.trigger((this.last = false));
      }
    }.bind(this));
    this.listenTo(actions.initlogin,function(){this.authClient.login("github");});
    this.listenTo(actions.initlogout,function(){this.authClient.logout();});
  },
  getDefaultData: function(){
    return this.last;
  }
});