describe("Customize Control Spec", function() {

	var	$rootScope,
		$scope,
		sut,
		element;

	beforeEach(module('Skateshop'));

	describe("Board Controls", function() {

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
				expect($rootScope.$emit).toHaveBeenCalledWith("boardLength", 13);
			});

			it("changing noseShape should trigger a noseShape event", function() {
				spyOn($rootScope, "$emit");
				sut.boardSettings.noseShape = 21;
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith("noseShape", 21);
			});

			it("changing tailShape should trigger a tailShape event", function() {
				spyOn($rootScope, "$emit");
				sut.boardSettings.tailShape = 43;
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith("tailShape", 43);
			});

			it("changing the tail curve should trigger a tailCurve event", function() {
				spyOn($rootScope, '$emit');
				sut.boardSettings.tailCurve = 18;
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith("tailCurve", 18);
			});

			it("changing the nose curve should trigger a noseCurve event", function() {
				spyOn($rootScope, '$emit');
				sut.boardSettings.noseCurve = 22;
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith("noseCurve", 22);
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
				expect($rootScope.$emit).toHaveBeenCalledWith("boardLength", 60);
			});

			it("calling a preset should call noseShape", function() {
				spyOn($rootScope, "$emit");
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith("noseShape", 35);
			});

			it("calling a preset should call tailShape", function() {
				spyOn($rootScope, "$emit");
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith("tailShape", 0);
			});

			it("calling a preset should call noseCurve", function() {
				spyOn($rootScope, "$emit");
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith('noseCurve', 0);
			});

			it("calling a preset should call tailCurve", function() {
				spyOn($rootScope, "$emit");
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect($rootScope.$emit).toHaveBeenCalledWith('tailCurve', 10);
			});

		});

	});

	describe("Grip Color", function() {

		beforeEach(inject(function($compile, _$rootScope_, $controller) {
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();
			element = angular.element('<div ng-controller="CustomizeCtrl as sut"><div ng-repeat="preset in sut.colors" ng-style="{backgroundColor: preset.color}" ng-click="sut.changeGripColor(preset.color)"></div>');
			$compile(element)($scope);
			sut = element.scope().sut;
			$scope.$digest();
		}));

		it("should have 4 children for colors", function() {
			expect(element.children().length).toBe(4);
		});

		it("should call the changeGripColor method on click", function() {
			spyOn(sut, "changeGripColor");
			element.children().eq(0)[0].click();
			expect(sut.changeGripColor).toHaveBeenCalled();
		});

		it("should call changeGripColor with the correct values", function() {
			spyOn(sut, "changeGripColor");
			element.children().eq(0)[0].click();
			expect(sut.changeGripColor).toHaveBeenCalledWith("rgb(0, 0, 0)");
		});

	});

	beforeEach(module(function($provide) {
		var mockCustomizeSectionsFactory = {
			sections: ['Board', 'Grip', 'Wheels'],
			board: {
				presets: [
					{
						name: 'street',
						imageSource: 'board_icon_street.png',
						boardLength: 30,
						noseShape: 0,
						tailShape: 50,
						noseCurve: 20,
						tailCurve: 20
					},
					{
						name: 'cruiser',
						imageSource: 'board_icon_cruiser.png',
						boardLength: 60,
						noseShape: 35,
						tailShape: 0,
						noseCurve: 0,
						tailCurve: 10
					}
				]
			},
			colors: [
				{
					name: 'black',
					color: 'rgb(0, 0, 0)'
				},
				{
					name: 'gray',
					color: 'rgb(125, 125, 125)'
				},
				{
					name: 'red',
					color: 'rgb(150, 0, 0)'
				},
				{
					name: 'yellow',
					color: 'rgb(200, 200, 0)'
				}
			]
		};

		$provide.value('CustomizeSectionsFactory', mockCustomizeSectionsFactory);
	}));


});















