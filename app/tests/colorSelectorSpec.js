describe("Color Selector", function() {

	var element,
		sut,
		$scope,
		$rootScope;

	describe("directive", function() {

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
			expect(sut.itemColor).toBeDefined();
		});

		it("color should return the color's background color with normalized values", function() {
			expect(sut.itemColor).toEqual([1, 1, 1]);
		});

		it("formatRGB should return the correct values for red", function() {
			var result = sut.formatRGB([255, 0, 0]);
			expect(result).toEqual([1, 0, 0]);
		});

	});

	describe("scope communication", function() {

		beforeEach(function() {
			module('Skateshop');
			inject(function($compile, _$rootScope_) {
				$rootScope = _$rootScope_;
				$scope = $rootScope.$new();
				$scope.color = {test: 'test'};
				$scope.selectColor = function(selectedColor) {
					$scope.color = selectedColor;
				};
				element = angular.element('<div color-selector="rgb(255, 255, 255)" on-select="selectColor(selectedColor)"></div>');
				$compile(element)($scope);
				sut = element.eq(0).isolateScope();
			});
		});

		it("should call the given function with the internal color values", function() {
			element[0].click();
			expect($scope.color).toEqual([1, 1, 1]);
		});
	});

});