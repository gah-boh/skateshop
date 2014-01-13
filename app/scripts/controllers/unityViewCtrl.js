skateshop.controller('UnityViewCtrl', function($scope, EventMediator, UnityObjectFactory, ColorService) {

	var unityViewCtrl = this;

	// Properties
	this.unity = UnityObjectFactory.getUnity(".unity-view", "unityPlayer/skateshop/skateshop.unity3d");

	// Events
	EventMediator.subscribe($scope, 'boardLength', function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'BoardLength', args);
	});

	EventMediator.subscribe($scope, 'noseShape', function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'NoseShape', args);
	});

	EventMediator.subscribe($scope, 'tailShape', function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'TailShape', args);
	});

	EventMediator.subscribe($scope, 'noseCurve', function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'BendNose', args);
	});

	EventMediator.subscribe($scope, 'tailCurve', function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'BendTail', args);
	});

	EventMediator.subscribe($scope, 'gripColor', function(event, args) {
		var formattedColor = ColorService.formatRGB(args).toString();
		unityViewCtrl.unity.SendMessage('/Skateboard/Grip', 'ChangeColor', formattedColor);
	});

	EventMediator.subscribe($scope, 'wheels', function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'ChangeWheels', args);
	});

	EventMediator.subscribe($scope, 'wheelsColor', function(event, args) {
		var formattedColor = ColorService.formatRGB(args).toString();
		unityViewCtrl.unity.SendMessage('Skateboard', 'ChangeWheelsColor', formattedColor);
	});

});