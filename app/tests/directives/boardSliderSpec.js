describe("Board Slider Specs", function() {

	var $rootScope,
		$scope,
		element,
		elementIsolatedScope;

	beforeEach(module("Skateshop.Directives.Customization"));

	beforeEach(inject(function(_$rootScope_, $compile) {
		$rootScope = _$rootScope_;
		$scope = _$rootScope_.$new();
		$scope.currentValue = 3;
		element = angular.element('<div board-slider="currentValue" min="45" max="90"></div>');
		$compile(element)($scope);
		elementIsolatedScope = element.eq(0).isolateScope();
	}));

	afterEach(function() {
		$scope.$destroy();
	});

	it("should change the controller's value when value the update function is called", function() {
		elementIsolatedScope.update(4);
		expect($scope.currentValue).toBe(4);
	});

	it("should update the slider value on a model change", function() {
		spyOn(elementIsolatedScope, 'updateSlider');
		$scope.currentValue = 10;
		$scope.$digest();
		expect(elementIsolatedScope.updateSlider).toHaveBeenCalled();
	});

	it("should have a minimum of 45 as supplied by the element", function() {
		expect(element.eq(0).slider("option", "min")).toBe(45);
	});

	it("should have a maximum of 90 as supplied by the element", function() {
		expect(element.eq(0).slider("option", "max")).toBe(90);
	});

});














