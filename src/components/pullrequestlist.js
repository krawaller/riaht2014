/** @jsx React.DOM */

var React = require('react'),
    connect = require('reflux').connect,
    _ = require('lodash'),
    pullrequestStore = require('../stores/pullrequeststore'),
    Link = require('react-router').Link;

var PullRequestList = React.createClass({
  mixins: [connect(pullrequestStore,"PR")],
  getInitialState: function(){return {PR:{}};},
  render: function(){
    var PR = this.state.PR, names = Object.keys(this.state.PR);
    var rows = _.map(names,function(user){
      var cells = _.map(names,function(target){
        var val = target===user?"---":PR[user][target]||0;
        return <td className={val===0?'text-danger':''}>{val}</td>; });
      return (
        <tr>
          <td><Link to="user" params={{username:user}}>{user}</Link></td>
          {cells}
        </tr>
      );
    },this);
    var headers = _.map(names,function(n){return <th><Link to="user" params={{username:n}}>{n}</Link></th>;});
    return (
      <div>
        <p>Here you see an overview of all registered pull requests.</p>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>By \ Target</th>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = PullRequestList;
