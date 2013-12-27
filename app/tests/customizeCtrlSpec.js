describe("Customize Control Spec", function() {

	var	$scope,
		sut,
		element;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function($compile, $rootScope, $controller) {
		$scope = $rootScope;
		element = angular.element('<div ng-controller="CustomizeCtrl as sut"><div ng-repeat="board in sut.boards.presets" ng-click="sut.selectBoardPreset(board)"></div></div>');
		sut = $controller('CustomizeCtrl');
		$compile(element)($scope);
		$scope.$digest();
	}));

	// This test is to show an example of how to test and spy from a click
	it("should call selectBoardPreset() on click", function() {
		spyOn(element.scope().sut, 'selectBoardPreset').andCallThrough();
		element.children().eq(0)[0].click();
		expect(element.scope().sut.selectBoardPreset).toHaveBeenCalled();
	});

});