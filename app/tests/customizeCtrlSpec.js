describe("Customize Control Spec", function() {

	var	$scope,
		sut,
		element;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function($compile, $rootScope, $controller) {
		$scope = $rootScope;
		element = angular.element('<div ng-controller="CustomizeCtrl as sut"><div ng-repeat="board in sut.boards.presets" ng-click="sut.selectBoardPreset(board)"><img src="" ng-src="images/{{ board.imageSource }}"></div></div>');
		sut = $controller('CustomizeCtrl', {$scope: $scope});
		$compile(element)($scope);
		$scope.$digest();
	}));

	// This test is to show an example of how to test and spy from a click
	it("should call selectBoardPreset() on click", function() {
		spyOn(element.scope().sut, 'selectBoardPreset').andCallThrough();
		element.children().eq(0)[0].click();
		expect(element.scope().sut.selectBoardPreset).toHaveBeenCalled();
	});

	it("should have an image with the correct source", function() {
		var image = element.children().eq(0).find('img');
		expect(image.attr('src')).toBe('images/board_icon_street.png')
	});

});