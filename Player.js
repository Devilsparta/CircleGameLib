var JsBase = require ("../JsBase/jsbase.js");

function Player(){
	this.m_PlayerNumber = null;
	this.m_PlayerPos = [];
	this.m_LastUpdateTime = JsBase.GetCurTime();
}

Player.prototype.NewPlayer = function(number, pos){	
	this.m_PlayerNumber = number;
	if(pos.length === 2){
		this.m_PlayerPos = pos;
	}	
}

Player.prototype.GetPos = function(){
	return this.m_PlayerPos;
}

Player.prototype.SetPos = function(pos){
	this.m_PlayerPos = pos;
}

Player.prototype.SetUpdateTime = function(time){
	this.m_LastUpdateTime = time;
}

Player.prototype.GetUpdataTime = function(){
	return this.m_LastUpdateTime;
}

module.exports = Player;
