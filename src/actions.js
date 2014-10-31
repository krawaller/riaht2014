var Reflux = require('reflux');

module.exports = Reflux.createActions([
	"error",
	"initlogin",
	"initlogout",
	"finishlogin",
	"finishlogout",
	// chat bits
	"sendchatmsg",
	"sendchatmsgsuccess",
	"newchatmessageloaded",
	"chatdataloaded",
	"clearlog",
	"userdataloaded",
	"updateuserfield",
	"updateuserfieldsuccess"
]);