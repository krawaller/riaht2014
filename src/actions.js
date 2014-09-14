var Reflux = require('reflux');

module.exports = Reflux.createActions([
	"initlogin",
	"initlogout",
	"finishlogin",
	"finishlogout",
	// chat bits
	"sendchatmsg",
	"newchatmessageloaded",
	"chatdataloaded"
]);