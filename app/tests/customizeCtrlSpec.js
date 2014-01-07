describe("Customize Control Spec", function() {

	var	$rootScope,
		$scope,
		sut,
		element;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function($compile, _$rootScope_, $controller) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		element = angular.element('<div ng-controller="CustomizeCtrl as sut"><div ng-repeat="board in sut.boards.presets" ng-click="sut.selectBoardPreset(board)"><img src="" ng-src="images/{{ board.imageSource }}"></div></div>');
		sut = $controller('CustomizeCtrl as sut', {$scope: $scope});
		$compile(element)($scope);
		$scope.$digest();
	}));

	describe("Changing board parameters", function() {

		it("changing boardLength should trigger a boardLength event", function() {
			spyOn($rootScope, "$emit");
			sut.boardSettings.boardLength = 13;
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardLength", {boardLength: 13});
		});

		it("changing noseShape should trigger a noseShape event", function() {
			spyOn($rootScope, "$emit");
			sut.boardSettings.noseShape = 21;
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardNoseShape", {boardNoseShape: 21});
		});

		it("changing tailShape should trigger a tailShape event", function() {
			spyOn($rootScope, "$emit");
			sut.boardSettings.tailShape = 43;
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardTailShape", {boardTailShape: 43});
		});

		it("changing the tail curve should trigger a tailCurve event", function() {
			spyOn($rootScope, '$emit');
			sut.boardSettings.tailCurve = 18;
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardTailCurve", {boardTailCurve: 18});
		});

		it("changing the nose curve should trigger a noseCurve event", function() {
			spyOn($rootScope, '$emit');
			sut.boardSettings.noseCurve = 22;
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardNoseCurve", {boardNoseCurve: 22});
		});

	});

	describe("Presets", function() {

		// This test is to show an example of how to test and spy from a click
		it("should call selectBoardPreset() on click", function() {
			spyOn(element.scope().sut, 'selectBoardPreset').andCallThrough();
			element.children().eq(0)[0].click();
			expect(element.scope().sut.selectBoardPreset).toHaveBeenCalled();
		});

		it("selectBoardPreset should call loadPreset", function() {
			spyOn(sut, 'loadPreset');
			sut.selectBoardPreset("cruiser");
			expect(sut.loadPreset).toHaveBeenCalled();
		});

		it("should have an image with the correct source", function() {
			var image = element.children().eq(0).find('img');
			expect(image.attr('src')).toBe('images/board_icon_street.png')
		});

		it("passing a preset by name should get the correct boardLength from the factory", function() {
			sut.loadPreset("cruiser");
			expect(sut.boardSettings.boardLength).toBe(60);
		});
		
		it("passing a preset by name should get the correct noseShape from the factory", function() {
			sut.loadPreset("cruiser");
			expect(sut.boardSettings.noseShape).toBe(35);
		});

		it("passing a preset by name should get the correct tailShape from the factory", function() {
			sut.loadPreset("cruiser");
			expect(sut.boardSettings.tailShape).toBe(0);
		});

		it("calling a preset should call boardLength", function() {
			spyOn($rootScope, "$emit");
			sut.loadPreset("cruiser");
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardLength", jasmine.any(Object));
		});

		it("calling a preset should call boardNoseShape", function() {
			spyOn($rootScope, "$emit");
			sut.loadPreset("cruiser");
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardNoseShape", jasmine.any(Object));
		});

		it("calling a preset should call boardLength", function() {
			spyOn($rootScope, "$emit");
			sut.loadPreset("cruiser");
			$scope.$digest();
			expect($rootScope.$emit).toHaveBeenCalledWith("boardTailShape", jasmine.any(Object));
		});

	});

});















