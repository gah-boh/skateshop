describe("Unity View Ctrl Spec", function() {

	var $scope,
		sut;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope;
		spyOn($scope, '$on').andCallThrough();
		sut = $controller('UnityViewCtrl as sut', {$scope: $scope});
		$scope.$digest();
	}));

	it('boardPresetSelected event should call the updateBoardPreset method', function() {
		$scope.$broadcast('boardPresetSelected', {board: 20});
		expect($scope.$on).toHaveBeenCalledWith('boardPresetSelected', sut.updateBoardPreset);
	});

	it("should set the controllers board object", function() {
		$scope.$broadcast('boardPresetSelected', {board: 20});
		expect(sut.currentBoard.board).toBe(20);
	});

});