skateshop.controller('UnityViewCtrl', function($scope) {

	// Properties
	this.currentBoard = {};

	// Events
	var self = this;
	$scope.$on('boardPresetSelected', function(event, args) {
		console.log('Something is happening.');
		self.updateBoardPreset(args.board);
	});

	// Controller Methods
	this.updateBoardPreset = function(board) {
		this.currentBoard.board = board;
	};


});