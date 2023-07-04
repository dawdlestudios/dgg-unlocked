const s = document.createElement("script");
s.src = chrome.runtime.getURL("dgg.js");
(document.head || document.documentElement).prepend(s);
s.onload = () => s.remove();
