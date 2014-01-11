describe("Color Picker Directive", function() {

	var $rootScope,
		element,
		sut;

	beforeEach(module('Skateshop'));

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

		xit("should normalize the array", function() {
			var spy = { toRgb: function(){} };
			spyOn(spy, 'toRgb').andReturn({r: 255, g: 255, b: 255, a: 1});
			sut.colorChanged(spy);
			expect($rootScope.gripColor).toEqual([1, 1, 1]);
		});

	});
});