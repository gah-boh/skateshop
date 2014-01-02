skateshop.controller('UnityViewCtrl', function($scope, $rootScope) {

	// Properties
	// TODO: This property is temporary until the unity visualizer is done.
	this.currentBoard = {};

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

	// Controller Methods
	this.updateBoardLength = function(boardLength) {
		this.currentBoard.boardLength = boardLength;
	};

	this.updateBoardNoseShape = function (boardNoseShape) {
		this.currentBoard.boardNoseShape = boardNoseShape;
	};

	this.updateBoardTailShape = function (boardTailShape) {
		this.currentBoard.boardTailShape = boardTailShape;
	};

	this.deRegisterEvents = function () {
		self.boardLengthEvent();
		self.boardNoseShapeEvent();
		self.boardTailShapeEvent();
	};

	$scope.$on('$destroy', self.deRegisterEvents);
});