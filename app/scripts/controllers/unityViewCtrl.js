skateshop.controller('UnityViewCtrl', function($scope, EventMediator, UnityObjectFactory) {

	// Properties
	this.unity = UnityObjectFactory.getUnity(".unity-view", "unityPlayer/skateshop/skateshop.unity3d");

	// Events
	var self = this;

	EventMediator.subscribe($scope, 'boardLength', function(event, args) {
		self.unity.SendMessage('Skateboard', 'BoardLength', args);
	});

	EventMediator.subscribe($scope, 'noseShape', function(event, args) {
		self.unity.SendMessage('Skateboard', 'NoseShape', args);
	});

	EventMediator.subscribe($scope, 'tailShape', function(event, args) {
		self.unity.SendMessage('Skateboard', 'TailShape', args);
	});

	EventMediator.subscribe($scope, 'noseCurve', function(event, args) {
		self.unity.SendMessage('Skateboard', 'BendNose', args);
	});

	EventMediator.subscribe($scope, 'tailCurve', function(event, args) {
		self.unity.SendMessage('Skateboard', 'BendTail', args);
	});

	EventMediator.subscribe($scope, 'gripColor', function(event, args) {
		self.unity.SendMessage('/Skateboard/Grip', 'ChangeColor', args.toString());
	});

	EventMediator.subscribe($scope, 'wheelsColor', function(event, args) {
		self.unity.SendMessage('Skateboard', 'ChangeWheelsColor', args.toString());
	});

});