skateshop.controller('UnityViewCtrl', function($scope, EventMediator, UnityObjectFactory) {

	// Properties
	this.unity = UnityObjectFactory(".unity-view", "unityPlayer/skateshop/skateshop.unity3d");

	// Events
	var self = this;

	EventMediator.subscribe($scope, 'boardLength', function(event, args) {
		self.updateBoardLength(args.boardLength);
	});

	EventMediator.subscribe($scope, 'boardNoseShape', function(event, args) {
		self.updateBoardNoseShape(args.boardNoseShape)
	});

	EventMediator.subscribe($scope, 'boardTailShape', function(event, args) {
		self.updateBoardTailShape(args.boardTailShape);
	});

	EventMediator.subscribe($scope, 'boardNoseCurve', function(event, args) {
			self.updateBoardNoseCurve(args.boardNoseCurve);
	});

	EventMediator.subscribe($scope, 'boardTailCurve', function(event, args) {
			self.updateBoardTailCurve(args.boardTailCurve);
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