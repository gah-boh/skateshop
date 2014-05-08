Skateshop.Unity.service('UnityObjectFactory', function() {

	var unityObject = new UnityObject2();

	var initUnity = function (selector, webPlayerAddress) {
		unityObject.initPlugin($(selector)[0], webPlayerAddress);
		return unityObject.getUnity();
	};

	this.getUnity = function(selector, webPlayerAddress) {
		return initUnity(selector, webPlayerAddress);
	};
});

