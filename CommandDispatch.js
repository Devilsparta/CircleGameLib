if (typeof module !== "undefined") {
	JsBase = require("../JsBase/jsbase");
}
function CmdDispatcher() {
}
var GetCmdDispatcher = jasmin.GenSingletonInst();

/**
 * Dispatch Cmd On RecvMsg
 * @param {string} con 控制器
 * @param {string} act 操作
 * @param {object} param 参数
 */
CmdDispatcher.prototype.DispatchCmd = function (param) {
	console.log(param);
	return;
	global.EvEmitter.Emit("Cmd_" + cmdName + "_Execute", param);
}

/**
 * SendMsg To Call Server Cmd
 * @param {string | number} cmdName string to identify which cmd you want to call
 * @param {object} param arguments you pass to cmd
 */
CmdDispatcher.prototype.SendCmd = function (cmdName, param) {
	var sendParam = {};
	if (!cmdName) {
		console.error("[CmdDispatcher.SendCmd] Wrong cmdName: " + cmdName);
		return;
	}
	sendParam.C = cmdName; //C: Cmd
	sendParam.D = param; //D: Data
	var jsonParam = JSON.stringify(sendParam);

	global.EvEmitter.Emit("Msger_SendMsg", jsonParam);
}

var Cmder = GetCmdDispatcher();

if (typeof module !== "undefined") {
	module.exports = GetCmdDispatcher();
}