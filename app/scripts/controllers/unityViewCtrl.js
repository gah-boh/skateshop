skateshop.controller('UnityViewCtrl', function($scope, $rootScope, UnityObjectFactory) {

	// Properties
	this.unity = UnityObjectFactory(".unity-view", "unityPlayer/skateshop/skateshop.unity3d");

	// Events
	var self = this;

	this.boardLengthEvent = 
		$rootScope.$on('boardLength', function(event, args) {
		self.updateBoardLength(args.boardLength);
	});

	this.boardNoseShapeEvent = 
		$rootScope.$on('boardNoseShape', function(event, args) {
		self.updateBoardNoseShape(args.boardNoseShape)
	});

	this.boardTailShapeEvent = 
		$rootScope.$on('boardTailShape', function(event, args) {
		self.updateBoardTailShape(args.boardTailShape);
	});

	this.boardNoseCurveEvent =
		$rootScope.$on('boardNoseCurve', function(event, args) {
			self.updateBoardNoseCurve(args.boardNoseCurve);
	});

	this.boardTailCurveEvent =
		$rootScope.$on('boardTailCurve', function(event, args) {
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

	this.deRegisterEvents = function () {
		self.boardLengthEvent();
		self.boardNoseShapeEvent();
		self.boardTailShapeEvent();
		self.boardNoseCurveEvent();
		self.boardTailCurveEvent();
	};

	$scope.$on('$destroy', self.deRegisterEvents);
});