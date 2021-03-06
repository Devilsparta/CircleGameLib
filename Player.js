if (typeof require === "function") {
	JsBase = require("../JsBase/jsbase.js");
}


function Player() {
	this.m_Data = {};
	this.m_Data["PlayerNumber"] = null;
	this.m_Data["PlayerPos"] = [];
	this.m_Data["LastUpdateTime"] = JsBase.GetCurTimestamp();
	this.m_Data["FirstLoginTime"] = null;
	this.m_Data["Room"] = null;
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

if (typeof module !== "undefined") {
	module.exports = Player;
}
