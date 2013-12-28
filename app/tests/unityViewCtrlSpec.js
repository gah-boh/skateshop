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

	afterEach(function() {
		$scope.$destroy();
	});

	it('boardPresetSelected event should call the updateBoardPreset method', function() {
		$scope.$emit('boardPresetSelected', {board: 20});
		expect($scope.$on).toHaveBeenCalled();
	});

	it("boardPresetSelected event should unbind itself when it's going to be destroyed", function() {
		spyOn(sut, 'boardPresetEvent').andCallThrough();
		$scope.$destroy();
		expect(sut.boardPresetEvent).toHaveBeenCalled();
	});

	it("should set the controllers board object", function() {
		$scope.$emit('boardPresetSelected', {board: 20});
		expect(sut.currentBoard.board).toBe(20);
	});

});