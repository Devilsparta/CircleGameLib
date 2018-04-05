var JsBase = require("../JsBase/jsbase.js");

function Player() {
	this.m_Data = {};
	this.m_Data["PlayerNumber"] = null;
	this.m_Data["PlayerPos"] = [];
	this.m_Data["LastUpdateTime"] = JsBase.GetCurTime();
	this.m_Data["FirstLoginTime"] = null;
}

Player.prototype.GetValue = function (key) {
	return this.m_Data[key] || this.m_Data;
}

Player.prototype.SetValue = function (key, value) {
	this.m_Data[key] = value;
	return true;
}


Player.prototype.GetPos = function () {
	return this.m_Data["PlayerPos"];
}

Player.prototype.SetPos = function (pos) {
	this.m_Data["PlayerPos"] = pos;
}

Player.prototype.SetUpdateTime = function (time) {
	this.m_Data["LastUpdateTime"] = time;
}

Player.prototype.GetUpdataTime = function () {
	return this.m_Data["LastUpdateTime"];
}

module.exports = Player;
