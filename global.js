if(typeof module === "undefined"){
	global = {};
}else{
	EventEmitter2 = require('eventemitter2').EventEmitter2;
}

global.EvEmitter = {};
var evEmitter = new EventEmitter2();

global.EvEmitter.On = function(){
	console.log("[Ev On] " + arguments[0]);
	evEmitter.on.apply(evEmitter, arguments);
}

global.EvEmitter.Emit = function(){
	console.log("[Ev Emit] " + arguments[0], "Arguments: ", arguments);
	evEmitter.emit.apply(evEmitter, arguments);
}

global.EvEmitter.Off = function(){
	console.log("[Ev Off] " + arguments[0]);
	evEmitter.off.apply(evEmitter, arguments);
}