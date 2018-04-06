(function () {
	var namespace = "LoginFinished";
	if (typeof window !== "undefined") {
		window[namespace] = _namespace;
	}

	if(typeof module !== "undefined"){
		Cmd = require("./Base_Cmd");
	}

	function _namespace(namespace) {
		Cmd.apply(this, arguments);
	}
	_namespace.prototype = new Cmd();

	_namespace.prototype.Check = function(param){
		return true;
	}

	_namespace.prototype.Do = function(param){
		console.log("Logined!!!");
		return true;
	}
})()