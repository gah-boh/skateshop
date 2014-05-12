describe("Color Picker Directive", function() {

	var $rootScope,
		element,
		sut;

	beforeEach(module('Customize'));

	beforeEach(inject(function(_$rootScope_, $compile) {
		$rootScope = _$rootScope_;
		$rootScope.gripColor = [];
		element = angular.element('<div color-picker="gripColor"></div>');
		$compile(element)($rootScope);
		sut = element.isolateScope();
	}));

	describe("colorChanged", function() {

		it("should convert the color to RGB", function() {
			var spy = { toRgb: function(){} };
			spyOn(spy, 'toRgb').andReturn({r: 1, g: 1, b: 1, a: 1});
			sut.colorChanged(spy);
			expect(spy.toRgb).toHaveBeenCalled();
		});

		it("should convert the rgb object to an array", function() {
			var spy = { toRgb: function(){} };
			spyOn(spy, 'toRgb').andReturn({r: 1, g: 1, b: 1, a: 1});
			sut.colorChanged(spy);
			expect($rootScope.gripColor).toEqual([1, 1, 1]);
		});

	});
});