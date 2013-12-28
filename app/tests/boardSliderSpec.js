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
		element = angular.element('<div ng-controller="MockCtrl as mockCtrl"><div board-slider="mockCtrl.currentValue"></div></div>');
		$compile(element)($scope);
		mockCtrl = element.scope().mockCtrl;
		elementIsolatedScope = element.children().eq(0).isolateScope();
	}));

	it("should change the controller's value when value the update function is called", function() {
		elementIsolatedScope.update(4);
		$scope.$digest();
		expect(mockCtrl.currentValue).toBe(4);
	});

	it("should update the slider value on a model change", function() {
		spyOn(elementIsolatedScope, 'updateSlider');
		mockCtrl.currentValue = 10;
		$scope.$digest();
		expect(elementIsolatedScope.updateSlider).toHaveBeenCalled();
	});

});
