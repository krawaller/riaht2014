var Reflux = require('reflux'),
    Firebase = require("firebase"),
    ref = new Firebase("https://riaht2014.firebaseio.com/"),
    actions = require('../actions'),
    users = require('./users.json');

module.exports = Reflux.createStore({
  startlogin: function(tryredirect){
    ref["authWithOAuth"+(tryredirect?"Redirect":"Popup")]("github", function(err, user) {
      if (err) {
        if (err.code === "TRANSPORT_UNAVAILABLE" && !tryredirect) {
          this.startlogin(true);
        } else {
          actions.error("Login error: "+err);
        }
      } else if (user) {
        var username = user && user.github && user.github.username;
        if (users.indexOf(username)!==-1){
          actions.finishlogin(username);
          this.trigger((this.last = username));
        } else {
          actions.error("Github user '"+username+"' isn't a member here. Add to the users.json array and do a pull request!");
        }
      } else {
        actions.error("Login failed, no data returned!");
        this.trigger((this.last = false));
      }
    }.bind(this));
  },
  init: function(){

    ref.onAuth(function(authData){
      if (!authData){
        actions.finishlogout();
        this.trigger((this.last = false));
      }
    }.bind(this));

    this.listenTo(actions.initlogin,function(){this.startlogin();}.bind(this));
    this.listenTo(actions.initlogout,function(){ref.unauth();});
  },
  getDefaultData: function(){
    return this.last;
  }
});