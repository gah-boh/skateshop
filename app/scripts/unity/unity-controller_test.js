describe("Unity View Ctrl Spec", function() {

	var $scope,
		sut,
		mockUnityObjectFactory,
		mockColorService,
		mockMediator;

	beforeEach(module('Unity'));

	beforeEach(function() {
		mockUnityObjectFactory = {
			getUnity: function(){
				return {
					SendMessage: jasmine.createSpy("unity send message spy")
				};
			}
		};
		mockColorService = {
			formatRGB: function() {}
		};

		mockMediator = {
			subscribe: jasmine.createSpy('Mediator subscribe Spy')
		};

		module(function($provide) {
			$provide.value('UnityObjectFactory', mockUnityObjectFactory);
			$provide.value('ColorFormatter', mockColorService);
			$provide.value('EventMediator', mockMediator);
		});
	});
	beforeEach(inject(function(_$rootScope_, $controller) {
		$scope = _$rootScope_;
		sut = $controller('UnityViewCtrl', {$scope: $scope});
		$scope.$digest();
	}));

	afterEach(function() {
		$scope.$destroy();
	});

	describe("board events", function() {

		it("should have registered the boardLength event", function() {
			expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'boardLength', sut.changeBoardLength);
		});

		it("should send message to unity to update current board length", function() {
			sut.changeBoardLength(null, 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BoardLength', 35);
		});

		it("should have registered the noseShape event", function() {
			expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'noseShape', sut.changeNoseShape);
		});

		it("should send unity message to update the nose shape", function() {
			sut.changeNoseShape(null, 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'NoseShape', 35);
		});

		it("should have registered the tailShape event", function() {
			expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'tailShape', sut.changeTailShape);
		});

		it("should send unity a message to update the tail shape", function() {
			sut.changeTailShape(null, 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
		});

		it("should have registered the nose curve event", function() {
			expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'noseCurve', sut.changeNoseCurve);
		});

		it("should tell unity to update the nose curve", function() {
			sut.changeNoseCurve(null, 12);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
		});

		it("should have registered the tail curve event", function() {
			expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'tailCurve', sut.changeTailCurve);
		});

		it("should send unity a message to update the tail curve", function() {
			sut.changeTailCurve(null, 53);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
		});

		it("should have registered the grip color event", function() {
			expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'gripColor', sut.changeGripColor);
		});

		describe("gripColor", function() {

			beforeEach(function() {
				spyOn(mockColorService, 'formatRGB').andReturn('1,0.5,1');
			});

			it("should send unity a message to update the grip color", function() {
				sut.changeGripColor(null, [255, 127, 255]);
				expect(sut.unity.SendMessage).toHaveBeenCalledWith('/Skateboard/Grip', 'ChangeColor', '1,0.5,1');
			});

			it("should call the ColorService to format the values", function() {
				sut.changeGripColor(null, [255, 127, 255]);
				expect(mockColorService.formatRGB).toHaveBeenCalledWith([255, 127, 255]);
			});

		});

		describe("Wheels Color", function() {

			beforeEach(function() {
				spyOn(mockColorService, 'formatRGB').andReturn('1,0.5,1');
			});

			it("should have registered the wheels color event", function() {
				expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'wheelsColor', sut.changeWheelsColor);
			});

			it("should call the ColorService to format the values", function() {
				sut.changeWheelsColor(null, [255, 127, 255]);
				expect(mockColorService.formatRGB).toHaveBeenCalledWith([255, 127, 255]);
			});

			it("should send unity a message to update the wheels color", function() {
				sut.changeWheelsColor(null, [1, 0.5, 1]);
				expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'ChangeWheelsColor', [1, 0.5, 1].toString());
			});

		});

		describe("Wheel Selection", function() {

			it("should register the wheel change event", function() {
				expect(mockMediator.subscribe).toHaveBeenCalledWith($scope, 'wheels', sut.changeWheels);
			});

			it("should call the unity object to change the wheels", function() {
				sut.changeWheels(null, 'medium');
				expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'ChangeWheels', 'medium');
			});

		});

	});

});






















