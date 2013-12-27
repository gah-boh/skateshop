skateshop.controller('UnityViewCtrl', function($scope) {

	// Properties
	this.currentBoard = {};

	// Events
	var self = this;
	$scope.$on('boardPresetSelected', function(event, args) {
		self.updateBoardPreset(args.board);
	});

	// Controller Methods
	this.updateBoardPreset = function(board) {
		this.currentBoard.board = board;
	};


});