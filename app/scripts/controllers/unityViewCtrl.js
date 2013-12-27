skateshop.controller('UnityViewCtrl', function($scope, $rootScope) {

	// Properties
	this.currentBoard = {};

	// Events
	var self = this;
	var boardPresetEvent = 
		$rootScope.$on('boardPresetSelected', function(event, args) {
		self.updateBoardPreset(args.board);
	});

	$scope.$on('$destroy', function(event) {
		self.deRegisterEvents();
	});

	// Controller Methods
	this.updateBoardPreset = function(board) {
		this.currentBoard.board = board;
	};

	this.deRegisterEvents = function () {
		boardPresetEvent();
	};

});