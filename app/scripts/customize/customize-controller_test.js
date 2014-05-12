describe("Customize Control Spec", function() {

	var	$scope,
		sut,
		mockMediator;

	beforeEach(module('Customize'));

	beforeEach(module(function($provide){
		mockMediator = {
			emit: jasmine.createSpy('Mediator Emit Spy')
		};
		$provide.value('EventMediator', mockMediator);
	}));

	beforeEach(module(function($provide) {
		var mockCustomizeSectionsFactory = {
			sections: ['Board', 'Grip', 'Wheels'],
			getFormattedColor: jasmine.createSpy("getFormattedColorSpy"),
			mappedPresets: function() {
				return {
					street: {
						name: 'street',
						imageSource: 'board_icon_street.png',
						presetSettings: {
							boardLength: 30,
							noseShape: 0,
							tailShape: 50,
							noseCurve: 20,
							tailCurve: 20
						}
					},
					cruiser: {
						name: 'cruiser',
						imageSource: 'board_icon_cruiser.png',
						presetSettings: {
							boardLength: 60,
							noseShape: 35,
							tailShape: 0,
							noseCurve: 0,
							tailCurve: 10
						}
					}
				};
			},
			board: {
				presets: [
					{
						name: 'street',
						imageSource: 'board_icon_street.png',
						presetSettings: {
							boardLength: 30,
							noseShape: 0,
							tailShape: 50,
							noseCurve: 20,
							tailCurve: 20
						}
					},
					{
						name: 'longboard pin tail',
						imageSource: 'board_icon_longboardPintail.png',
						presetSettings: {
							boardLength: 45,
							noseShape: 50,
							tailShape: -45,
							noseCurve: 0,
							tailCurve: 5
						}
					},
					{
						name: 'cruiser',
						imageSource: 'board_icon_cruiser.png',
						presetSettings: {
							boardLength: 33,
							noseShape: 35,
							tailShape: 0,
							noseCurve: 0,
							tailCurve: 20
						}
					}
				]
			},
			wheels: [
				{
					name: 'small',
					imageSource: 'wheel_icon_smallWheel.png'
				},
				{
					name: 'medium',
					imageSource: 'wheel_icon_mediumWheel.png'
				},
				{
					name: 'large',
					imageSource: 'wheel_icon_largeWheel.png'
				}
			],
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


	beforeEach(inject(function(_$rootScope_, $controller) {
		$scope = _$rootScope_;
		sut = $controller('CustomizeCtrl', {$scope: $scope});
	}));

	describe("Board Controls", function() {

		describe("Changing board parameters", function() {

			it("changing boardLength should trigger a boardLength event", function() {
				sut.boardSettings.boardLength = 13;
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("boardLength", 13);
			});

			it("changing noseShape should trigger a noseShape event", function() {
				sut.boardSettings.noseShape = 21;
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("noseShape", 21);
			});

			it("changing tailShape should trigger a tailShape event", function() {
				sut.boardSettings.tailShape = 43;
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("tailShape", 43);
			});

			it("changing the tail curve should trigger a tailCurve event", function() {
				sut.boardSettings.tailCurve = 18;
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("tailCurve", 18);
			});

			it("changing the nose curve should trigger a noseCurve event", function() {
				sut.boardSettings.noseCurve = 22;
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("noseCurve", 22);
			});

		});

		describe("Presets", function() {

			it("selectBoardPreset should call loadPreset", function() {
				spyOn(sut, 'loadPreset');
				sut.selectBoardPreset("cruiser");
				expect(sut.loadPreset).toHaveBeenCalled();
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
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("boardLength", 60);
			});

			it("calling a preset should call noseShape", function() {
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("noseShape", 35);
			});

			it("calling a preset should call tailShape", function() {
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith("tailShape", 0);
			});

			it("calling a preset should call noseCurve", function() {
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith('noseCurve', 0);
			});

			it("calling a preset should call tailCurve", function() {
				sut.loadPreset("cruiser");
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith('tailCurve', 10);
			});

		});

	});

	describe("Grip Color", function() {

		it("should have 4 colors from the factory", function() {
			expect(sut.colors.length).toBe(4);
		});

		it("should emit an event through the $watch when changeGripColor is called", function() {
			sut.changeGripColor([0.5, 0.5, 0.5]);
			$scope.$digest();
			expect(mockMediator.emit).toHaveBeenCalledWith('gripColor', [0.5, 0.5, 0.5]);
		});

	});

	describe("Wheels", function() {

		describe("Wheel Color", function() {

			it("should emit an event through the $watch when changeWheelsColor is called", function() {
				sut.changeWheelsColor([0.5, 0.5, 0.5]);
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith('wheelsColor', [0.5, 0.5, 0.5]);
			});

		});

		describe("Wheel Selection", function() {

			it("controller should have wheels defined", function() {
				expect(sut.wheels).toBeDefined();
			});

			it("should change the wheel on the boardSettings", function() {
				sut.changeWheel('medium');
				expect($scope.boardSettings.wheels).toEqual('medium');
			});

			it("should emit and event through the $watch when wheels are changed", function() {
				sut.changeWheel('medium');
				$scope.$digest();
				expect(mockMediator.emit).toHaveBeenCalledWith('wheels', 'medium');
			});

		});

	});

});















