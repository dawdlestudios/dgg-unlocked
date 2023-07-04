"use strict";

const OriginalWebSocket = window.WebSocket;
window.localStorage.setItem("dggApi:bannedEmbeds", "[]");
window.WebSocket = class WebSocket extends OriginalWebSocket {
	set onmessage(fn) {
		this.addEventListener("message", (event) => {
			let data = null;
			try {
				data = JSON.parse(event.data);
			} catch (error) {
				return;
			}

			if (data.type === "dggApi:bannedEmbeds")
				return fn(
					new MessageEvent("message", {
						data: JSON.stringify({
							...data,
							data: [],
						}),
						...event,
					}),
				);

			fn(event);
		});
	}
};
