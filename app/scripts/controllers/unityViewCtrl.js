skateshop.controller('UnityViewCtrl', function($scope, $rootScope) {

	// Properties
	this.currentBoard = {};

	// Events
	var self = this;
	this.boardPresetEvent = 
		$rootScope.$on('boardPresetSelected', function(event, args) {
		self.updateBoardPreset(args.board);
	});

	// Controller Methods
	this.updateBoardPreset = function(board) {
		this.currentBoard.board = board;
	};

	this.deRegisterEvents = function () {
		self.boardPresetEvent();
	};

	$scope.$on('$destroy', this.deRegisterEvents);
});