function Cmd(cmdName) {
	if(!cmdName){
		return;
	}
	this.m_CmdName = cmdName;
	global.EvEmitter.On("Cmd_" + cmdName + "_Execute", Cmd.prototype.Execute.bind(this));
}

Cmd.prototype.Execute = function (param) {
	if (!this.Check(param)) {
		return false;
	}
	var result = this.Do(param) || {};
	global.EvEmitter.Emit("Cmd_" + this.m_CmdName + "_Finished", result);
}

Cmd.prototype.Check = function () {
	return true;
}

Cmd.prototype.Do = function () {
	return;
}

if(typeof module !== "undefined"){
	module.exports = Cmd;
}