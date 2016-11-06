"use strict";

/* Extract url */
var domain = (url) => {
	url = url || window.location.href;
	var domain;
	if (url.indexOf("://") > -1) {
		domain = url.split('/')[2];
	}
	else {
		domain = url.split('/')[0];
	}
	domain = domain.split(':')[0];
	return domain;
}

/* Load domain script */
var loadScript = (script) => {
	var s = document.createElement('script');
	s.src =  chrome.extension.getURL(script);
	(document.head || document.documentElement).appendChild(s);
};

/* Select domain script */
switch(domain()) {
	case 'www.dn.se':
		loadScript('dn.js');
		break;
	default:
		break;
}
