var Reflux = require('reflux'),
    userstore = require('./userstore'),
    _ = require('lodash');

module.exports = Reflux.createStore({
  listenables:{onUpdatedUsers:userstore},
  onUpdatedUsers: function(users){
    var names = Object.keys(users);
    this.trigger((this.last = _.reduce(names,function(m,name){
      m[name] = _.reduce(users[name].pulls||{},function(mp,pr){
        var targetuser = _.find(names,function(tname){return pr.match(tname+"/"+users[tname].repo);})||"UNKNOWN";
        mp[targetuser] = (mp[targetuser]||0)+1;
        return mp;
      },{});
      return m;
    },{})));
  },
  getDefaultData: function(){
    return this.last || {};
  }
});