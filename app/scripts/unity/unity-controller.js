//	var UnityViewCtrlModule = angular.module('Skateshop.Controllers.UnityViewCtrl', ['SpagEventMediator', 'Skateshop.Services.UnityObject', 'Skateshop.Services.ColorService']);

Skateshop.Unity.controller('UnityViewCtrl', function($scope, EventMediator, UnityObjectFactory, ColorFormatter) {

	var unityViewCtrl = this;

	this.unity = UnityObjectFactory.getUnity(".unity-view", "unityPlayer/skateshop/skateshop.unity3d");

	unityViewCtrl.changeBoardLength = function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'BoardLength', args);
	};

	unityViewCtrl.changeNoseShape = function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'NoseShape', args);
	};

	unityViewCtrl.changeTailShape = function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'TailShape', args);
	};

	unityViewCtrl.changeNoseCurve = function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'BendNose', args);
	};

	unityViewCtrl.changeTailCurve = function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'BendTail', args);
	};

	unityViewCtrl.changeGripColor = function(event, args) {
		var formattedColor = ColorFormatter.formatRGB(args).toString();
		unityViewCtrl.unity.SendMessage('/Skateboard/Grip', 'ChangeColor', formattedColor);
	};

	unityViewCtrl.changeWheels = function(event, args) {
		unityViewCtrl.unity.SendMessage('Skateboard', 'ChangeWheels', args);
	};

	unityViewCtrl.changeWheelsColor = function(event, args) {
		var formattedColor = ColorFormatter.formatRGB(args).toString();
		unityViewCtrl.unity.SendMessage('Skateboard', 'ChangeWheelsColor', formattedColor);
	};

	// Events
	EventMediator.subscribe($scope, 'boardLength', unityViewCtrl.changeBoardLength);

	EventMediator.subscribe($scope, 'noseShape', unityViewCtrl.changeNoseShape);

	EventMediator.subscribe($scope, 'tailShape', unityViewCtrl.changeTailShape);

	EventMediator.subscribe($scope, 'noseCurve', unityViewCtrl.changeNoseCurve);

	EventMediator.subscribe($scope, 'tailCurve', unityViewCtrl.changeTailCurve);

	EventMediator.subscribe($scope, 'gripColor', unityViewCtrl.changeGripColor);

	EventMediator.subscribe($scope, 'wheels', unityViewCtrl.changeWheels);

	EventMediator.subscribe($scope, 'wheelsColor', unityViewCtrl.changeWheelsColor);

});

