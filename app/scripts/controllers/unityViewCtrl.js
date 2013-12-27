skateshop.controller('UnityViewCtrl', function($scope) {

	$scope.currentBoard = {};

	$scope.updateBoardPreset = function(event, options) {
		console.log('updateBoardPreset');
		$scope.currentBoard.board = options.board;
	};

	$scope.$on('boardPresetSelected', $scope.updateBoardPreset);
});