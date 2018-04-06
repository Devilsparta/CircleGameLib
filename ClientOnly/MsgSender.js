function MsgSender() {
	this.m_Protocal = null;
	this.m_Url = null;
}

var GetMsgSneder = JsBase.GenSingletonInst();

MsgSender.prototype.Init = function (param) {
	this.m_Url = param.Url;

	if (!this.m_Url) {
		console.error("[MsgSender.Init] No Url");
		return;
	}

	this.m_Protocal = new WebSocket(this.m_Url);
	if (typeof (param.OnOpen) === "function") {
		this.m_Protocal.addEventListener("open", param.OnOpen);
	}

	if (typeof (param.OnMessage) === "function") {
		this.m_Protocal.addEventListener("message", param.OnMessage)
	}

	if (typeof (param.OnError) === "function") {
		this.m_Protocal.addEventListener("error", param.OnError)
	}

	if (typeof (param.OnClose) === "function") {
		this.m_Protocal.addEventListener("close", param.OnClose)
	}

}

