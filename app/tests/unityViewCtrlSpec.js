describe("Unity View Ctrl Spec", function() {

	var $scope,
		sut;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope;
		spyOn($scope, '$on').andCallThrough();
		sut = $controller('UnityViewCtrl', {$scope: $scope});
		$scope.$digest();
	}));

	it('boardPresetSelected event should call the updateBoardPreset method', function() {
		$scope.$broadcast('boardPresetSelected', {board: 20});
		expect($scope.$on).toHaveBeenCalledWith('boardPresetSelected', $scope.updateBoardPreset);
	});

	it("should set the controllers board object", function() {
		$scope.$broadcast('boardPresetSelected', {board: 20});
		expect($scope.currentBoard.board).toBe(20);
	});

});