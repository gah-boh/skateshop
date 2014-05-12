describe("customizeBar", function() {

	var sut,
		$scope,
		element;

	beforeEach(module("Customize"));
	beforeEach(module('templates')); // This module is declared in karma.conf.js in the ng-html2js configuration.
	beforeEach(inject(function($compile, _$rootScope_) {
		$scope = _$rootScope_;
		$scope.testTitle = "Testing Title";
		$scope.selection = {title: 'Original Title'};
		element = angular.element('<customize-bar title="{{testTitle}}" active-selection="selection.title"></customize-bar>');
		$compile(element)($scope);
		$scope.$digest();
		sut = element.isolateScope();
	}));

	it("should have a title of Testing Title", function() {
		expect(sut.title).toBe("Testing Title");
	});

	it("should have the same initial value for the activeSelection", function() {
		expect(element.isolateScope().activeSelection).toBe($scope.selection.title);
	});

	it("changing the scopes selection.title will change the directives activeSelection.title", function() {
		var expected = "New Title";
		$scope.selection.title = expected;
		$scope.$apply();
		expect(element.isolateScope().activeSelection).toEqual(expected);
	});

	it("changing the directives activeSelection.title  will change the scopes selection.title", function() {
		var expected = "Another New Title";
		element.isolateScope().activeSelection = expected;
		$scope.$apply();
		expect($scope.selection.title).toEqual(expected);
	});

	describe("Clicking functions", function() {

		var secondElement;

		beforeEach(inject(function($compile) {
			secondElement = angular.element('<customize-bar title="Second Element" active-selection="selection.title"></customize-bar>');
			$compile(secondElement)($scope);
			$scope.$digest();
		}));

		it("after click the scopes selection title should be Second Element", function() {
			secondElement.isolateScope().toggleActive();
			$scope.$digest();
			expect($scope.selection.title).toBe("Second Element");
		});

		it("after click the scopes selection title should NOT be Original Title", function() {
			secondElement.isolateScope().toggleActive();
			$scope.$digest();
			expect($scope.selection.title).not.toBe('Original Title');
		});
	});

	describe("adding active class", function() {

		it("should have the activeSection class when clicked", function() {
			element.isolateScope().toggleActive();
			$scope.$digest();
			expect(element.hasClass("active-section")).toBeTruthy();
		});
	});

});
