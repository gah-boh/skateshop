describe("Board Slider Specs", function() {

	var $rootScope,
		$scope,
		element,
		elementIsolatedScope,
		mockCtrl;

	beforeEach(module(function($provide) {
		var mockController = function() {
			this.currentValue = 3;
		};
		angular.module("Skateshop").controller('MockCtrl', mockController);
		$provide.value('MockCtrl',  mockController);
	}));
	beforeEach(module("Skateshop"));
	beforeEach(inject(function(_$rootScope_, $compile, $controller) {
		$rootScope = _$rootScope_;
		$scope = _$rootScope_.$new();
		element = angular.element('<div ng-controller="MockCtrl as mockCtrl"><div board-slider="mockCtrl.currentValue" min="45" max="90"></div></div>');
		$compile(element)($scope);
		mockCtrl = element.scope().mockCtrl;
		elementIsolatedScope = element.children().eq(0).isolateScope();
	}));

	afterEach(function() {
		$scope.$destroy();
	});

	it("should change the controller's value when value the update function is called", function() {
		elementIsolatedScope.update(4);
		expect(mockCtrl.currentValue).toBe(4);
	});

	it("should update the slider value on a model change", function() {
		spyOn(elementIsolatedScope, 'updateSlider');
		mockCtrl.currentValue = 10;
		$scope.$digest();
		expect(elementIsolatedScope.updateSlider).toHaveBeenCalled();
	});

	it("should have a minimum of 45 as supplied by the element", function() {
		expect(element.children(0).eq(0).slider("option", "min")).toBe(45);
	});

	it("should have a maximum of 90 as supplied by the element", function() {
		expect(element.children(0).eq(0).slider("option", "max")).toBe(90);
	});

});














