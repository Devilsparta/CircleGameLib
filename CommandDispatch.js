function CommandDispatch() {
}

/**
 * Dispatch Cmd On RecvMsg
 * @param {string} con 控制器
 * @param {string} act 操作
 * @param {object} param 参数
 */
CommandDispatch.prototype.DispatchCmd = function (cmdName, param) {
	global.EvEmitter.Emit("Cmd_" + cmdName + "_Execute", param);
}

/**
 * SendMsg To Call Server Cmd
 * @param {string | number} cmdName string to identify which cmd you want to call
 * @param {object} param arguments you pass to cmd
 */
CommandDispatch.prototype.SendCmd = function(cmdName, param){
	var sendParam = {};
	if(!cmdName){
		console.error("[CommandDispatch.SendCmd] Wrong cmdName: " + cmdName);
		return;
	}	
	sendParam.C = cmdName; //C: Cmd
	sendParam.D = param; //D: Data
	var jsonParam = JSON.stringify(sendParam);
	
	global.EvEmitter.Emit("Msger_SendMsg", jsonParam);
}