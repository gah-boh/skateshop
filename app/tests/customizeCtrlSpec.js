describe("Customize Control Spec", function() {

	var	$scope,
		sut,
		element;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function($compile, $rootScope, $controller) {
		$scope = $rootScope;
		element = angular.element('<div ng-controller="CustomizeCtrl as sut"><div ng-repeat="board in sut.boards.presets" ng-click="sut.selectBoardPreset(board)"><img src="" ng-src="images/{{ board.imageSource }}"></div></div>');
		sut = $controller('CustomizeCtrl as sut', {$scope: $scope});
		$compile(element)($scope);
		$scope.$digest();
	}));

	// This test is to show an example of how to test and spy from a click
	it("should call selectBoardPreset() on click", function() {
		spyOn(element.scope().sut, 'selectBoardPreset').andCallThrough();
		element.children().eq(0)[0].click();
		expect(element.scope().sut.selectBoardPreset).toHaveBeenCalled();
	});

	it("selectBoardPreset should call loadPreset", function() {
		spyOn(sut, 'loadPreset');
		sut.selectBoardPreset("street");
		expect(sut.loadPreset).toHaveBeenCalled();
	});

	it("should have an image with the correct source", function() {
		var image = element.children().eq(0).find('img');
		expect(image.attr('src')).toBe('images/board_icon_street.png')
	});

	it("passing a preset by name should get the correct boardLength from the factory", function() {
		sut.loadPreset("street");
		expect(sut.boardSettings.boardLength).toBe(30);
	});
	
	it("passing a preset by name should get the correct noseShape from the factory", function() {
		sut.loadPreset("street");
		expect(sut.boardSettings.noseShape).toBe(50);
	});

	it("passing a preset by name should get the correct tailShape from the factory", function() {
		sut.loadPreset("street");
		expect(sut.boardSettings.tailShape).toBe(50);
	});

});