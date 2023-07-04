const requestPerms = () =>
	browser.permissions.request({
		origins: ["*://*.destiny.gg/*"],
	});

browser.action.onClicked.addListener(() => {
	console.log("clicked");
	requestPerms();

	// check if we have permission to inject
	if (browser.permissions.contains({ origins: ["*://*.destiny.gg/*"] })) {
		// reload all tabs on destiny.gg
		browser.tabs.query({ url: "*://*.destiny.gg/*" }).then((tabs) => {
			tabs.forEach((tab) => {
				browser.tabs.reload(tab.id);
			});
		});
	}
});
