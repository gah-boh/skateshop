describe("Color Selector", function() {

	var element,
		sut,
		$scope;

	describe("directive", function() {

		beforeEach(function() {
			module('Skateshop.Directives.Customization');
			inject(function($compile, _$rootScope_) {
				$scope = _$rootScope_;
				element = angular.element('<div color-selector="rgb(255, 255, 255)"></div>');
				$compile(element)($scope);
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
			expect(sut.itemColor).toEqual([255, 255, 255]);
		});

	});

	describe("scope communication", function() {

		beforeEach(function() {
			module('Skateshop.Directives.Customization');
			inject(function($compile, _$rootScope_) {
				$scope = _$rootScope_;
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
			expect($scope.color).toEqual([255, 255, 255]);
		});
	});

});