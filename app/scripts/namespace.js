window.namespace = window.namespace || function (name, separator, container) {
	var ns = name.split(separator || '.');
	var containingObject = container || window;

	for (var i = 0; i < ns.length; i++) {
		containingObject = containingObject[ns[i]] = containingObject[ns[i]] || {};
	}
};