describe("Board Slider Specs", function() {

	var $rootScope,
		$scope,
		element,
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
		$scope.$digest();
	}));

	it("should change the controller's value when value the update function is called", function() {
		element.children().eq(0).isolateScope().update(4);
		$scope.$apply();
		expect(mockCtrl.currentValue).toBe(4);
	});

	xit("should update the slider value on a model change", function() {

	});

});
