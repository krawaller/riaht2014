/** @jsx React.DOM */

var React = require('react');

var Start = React.createClass({
  render: function() {
    return (
     <div>
      <p>
        Welcome to the <strong>JavaScript Guild</strong>! This site supports the 
        {' '}<a href='https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/'>RIA development course</a>
        {' '}at <a href='http://lnu.se/'>Linnaeus University</a> autumn 2014.
       </p>
       <p>
         The site serves two purposes; it allows the students to enter their data so their progression can
         be tracked, and also the site itself is an example of a RIA built with the relevant techniques (mainly React and Firebase).
       </p>
       <p>
         For more information see the <a href="https://coursepress.lnu.se/kurs/ria-utveckling-med-javascript/guilden/">course web</a> (in Swedish).
       </p>
     </div>
    );
  }
});

module.exports = Start;