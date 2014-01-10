skateshop.controller('UnityViewCtrl', function($scope, EventMediator, UnityObjectFactory) {

	// Properties
	this.unity = UnityObjectFactory.getUnity(".unity-view", "unityPlayer/skateshop/skateshop.unity3d");

	// Events
	var self = this;

	EventMediator.subscribe($scope, 'boardLength', function(event, args) {
		self.updateBoardLength(args);
	});

	EventMediator.subscribe($scope, 'noseShape', function(event, args) {
		self.updateBoardNoseShape(args)
	});

	EventMediator.subscribe($scope, 'tailShape', function(event, args) {
		self.updateBoardTailShape(args);
	});

	EventMediator.subscribe($scope, 'noseCurve', function(event, args) {
			self.updateBoardNoseCurve(args);
	});

	EventMediator.subscribe($scope, 'tailCurve', function(event, args) {
			self.updateBoardTailCurve(args);
	});

	// Controller Methods
	this.updateBoardLength = function(boardLength) {
		this.unity.SendMessage('Skateboard', 'BoardLength', boardLength);
	};

	this.updateBoardNoseShape = function (boardNoseShape) {
		this.unity.SendMessage('Skateboard', 'NoseShape', boardNoseShape);
	};

	this.updateBoardTailShape = function (boardTailShape) {
		this.unity.SendMessage('Skateboard', 'TailShape', boardTailShape);
	};

	this.updateBoardNoseCurve = function(boardNoseCurve) {
		this.unity.SendMessage('Skateboard', 'BendNose', boardNoseCurve);
	};

	this.updateBoardTailCurve = function(boardTailCurve) {
		this.unity.SendMessage('Skateboard', 'BendTail', boardTailCurve);
	};

});