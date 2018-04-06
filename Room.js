if (typeof require === "function") {
	JsBase = require("../JsBase/jsbase");
}
function Room(){
	this.m_Data = {};
	this.m_Data["Players"] = {};
}

Room.prototype.AddPlayer = function(uid, player){
	if(JsBase.IsValid(this.m_Data["Players"][uid])){
		console.error("[Room AddPlayer] This Player uid: " + uid + " is already exist");
		return false;
	}
	this.m_Data["Players"][uid] = player;
	return true;	
}

Room.prototype.RemovePlayer = function(uid){
	var removedPlayer = this.m_Data["Players"][uid];
	if(!JsBase.IsValid(this.m_Data["Players"][uid])){
		console.error("[Room RemovePlayer] This Player uid: " + uid + " is already exist");
		return false;
	}	
	delete this.m_Data["Players"][uid];
	return removedPlayer;
}

Room.prototype.IsPlayerExist = function(uid){	
	return !!JsBase.IsValid(this.m_Data["Players"][uid]);
}

Room.prototype.GetAllPlayers = function(){
	return JsBase.Clone(this.m_Data["Players"]);
}