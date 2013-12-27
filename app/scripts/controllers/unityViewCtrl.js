skateshop.controller('UnityViewCtrl', function($scope) {

	var self = this;
	this.currentBoard = {};

	this.updateBoardPreset = function(event, options) {
		self.currentBoard.board = options.board;
	};

	$scope.$on('boardPresetSelected', this.updateBoardPreset);
});