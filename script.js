function browserCheck() {
	var isChrome = window.chrome;
	var myVendorName = window.navigator.vendor;
	if  (isChrome !== null && myVendorName === "Google Inc.") {
		// pass
	} else {
		document.body.innerHTML = "<p style=\"font-size:40px;\">You need <a href=\"http:\/\/google.com/chrome\" target=\"blank\">Google Chrome</a> to view this content</p>";
	}
}

window.onload = browserCheck();