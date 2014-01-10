describe("Color Selector", function() {

	var element,
		sut,
		$scope,
		$rootScope;

	beforeEach(function() {
		module('Skateshop');
		inject(function($compile, _$rootScope_) {
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();
			element = angular.element('<div color-selector="rgb(255, 255, 255)"></div>');
			$compile(element)($rootScope);
			sut = element.isolateScope();
		});
	});

	it("should have a defined element with scope", function() {
		expect(element.scope()).toBeDefined();
	});

	it("should have the color in its isolate scope", function() {
		expect(sut.color).toBeDefined();
	});

	it("should set the color's background color", function() {
		expect(sut.color).toEqual([255, 255, 255]);
	});

});