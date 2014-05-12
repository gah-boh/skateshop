describe("customizeBar", function() {

	var $scope,
		element;

	beforeEach(module("Customize"));
	beforeEach(module('templates')); // This module is declared in karma.conf.js in the ng-html2js configuration.
	beforeEach(inject(function($compile, _$rootScope_) {
		$scope = _$rootScope_;
		$scope.testTitle = "TestingTitle";
		$scope.selection = {title: 'Dude'};
		element = angular.element('<customize-bar title="{{testTitle}}" active-selection="selection.title"></customize-bar>');
		$compile(element)($scope);
		$scope.$digest();
	}));

	it("should have a title of TestingTitle", function() {
		expect(element.isolateScope().title).toBe("TestingTitle");
	});

	it("should have the same initial value for the activeSelection", function() {
		expect(element.isolateScope().activeSelection).toBe($scope.selection.title);
	});

	it("changing the scopes selection.title will change the directives activeSelection.title", function() {
		var expected = "Please Abide";
		$scope.selection.title = expected;
		$scope.$apply();
		expect(element.isolateScope().activeSelection).toEqual(expected);
	});

	it("changing the directives activeSelection.title  will change the scopes selection.title", function() {
		var expected = "Notorious";
		element.isolateScope().activeSelection = expected;
		$scope.$apply();
		expect($scope.selection.title).toEqual(expected);
	});

	describe("Clicking functions", function() {

		var secondElement;

		beforeEach(inject(function($compile) {
			secondElement = angular.element('<customize-bar title="secondElement" active-selection="selection.title"></customize-bar>');
			$compile(secondElement)($scope);
			$scope.$digest();
		}));

		it("after click the scopes selection title should be secondElement", function() {
			secondElement.isolateScope().toggleActive();
			$scope.$digest();
			expect($scope.selection.title).toBe("secondElement");
		});

		it("after click the scopes selection title should NOT be Dude", function() {
			secondElement.isolateScope().toggleActive();
			$scope.$digest();
			expect($scope.selection.title).not.toBe('Dude');
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
