describe("Unity View Ctrl Spec", function() {

	var $rootScope,
		$scope,
		sut,
		mockUnityObjectFactory,
		mediator;

	beforeEach(module(function($provide) {
		mockUnityObjectFactory = {
			getUnity: function(){
				return {
					SendMessage: jasmine.createSpy("unity send message spy")
				}
			}
		};
		$provide.value('UnityObjectFactory', mockUnityObjectFactory);
	}));
	beforeEach(module('Skateshop'));
	beforeEach(inject(function(_$rootScope_, $controller, EventMediator) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		mediator = EventMediator;
		spyOn($rootScope, '$on').andCallThrough();
		sut = $controller('UnityViewCtrl as sut', {$scope: $scope});
		$scope.$digest();
	}));

	afterEach(function() {
		$scope.$destroy();
	});

	describe("board events", function() {

		it("should have registered the boardLength event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('boardLength', jasmine.any(Function))
		});

		it("should call the updateBoardLength on the boardLength event", function() {
			$rootScope.$emit('boardLength', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BoardLength', 35);
		});

		it("boardLength event should deregister on destroy", function() {
			$rootScope.$emit('boardLength', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalled();
			$scope.$destroy();
			$rootScope.$emit('boardLength', 35);
			expect(sut.unity.SendMessage.calls.length).toEqual(1);
		});

		it("should send message to unity to update current board length", function() {
			$scope.$emit('boardLength', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BoardLength', 35);
		});

		it("should have registered the noseShape event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('noseShape', jasmine.any(Function))
		});

		it("should call the updateNoseShape on unity objon the noseShape event", function() {
			$rootScope.$emit('noseShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'NoseShape', 35);
		});

		it("boardNoseShape event should deregister on destroy", function() {
			$rootScope.$emit('noseShape', 35);
			$scope.$destroy();
			$rootScope.$emit('noseShape', 35);
			expect(sut.unity.SendMessage.calls.length).toEqual(1);
		});

		it("should send unity message to update the nose shape", function() {
			$scope.$emit('noseShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'NoseShape', 35);
		});

		it("should have registered the tailShape event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('tailShape', jasmine.any(Function))
		});

		it("should call the updateTailShape function on the boardTailShape event", function() {
			$rootScope.$emit('tailShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
		});

		it("boardTailShape event should deregister on destroy", function() {
			$rootScope.$emit('tailShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
			$scope.$destroy();
			$rootScope.$emit('tailShape', 35);
			expect(sut.unity.SendMessage.calls.length).toEqual(1)
		});

		it("should send unity a message to update the tail shape", function() {
			$scope.$emit('tailShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
		});

		it("should have registered the nose curve event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('noseCurve', jasmine.any(Function));
		});

		it("should call the updateNoseCurve function on the boardNoseCurve event", function() {
			$rootScope.$emit('noseCurve', 12);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
		});

		it("boardNoseCurve event should deregister on destroy", function() {
			$rootScope.$emit('noseCurve', 12);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
			$scope.$destroy();
			$rootScope.$emit('noseCurve', 12);
			expect(sut.unity.SendMessage.calls.length).toEqual(1);
		});

		it("should tell unity to update the nose curve", function(){
			$scope.$emit('noseCurve', 12);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
		});

		it("should have registered the tail curve event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('tailCurve', jasmine.any(Function));
		});

		it("should call the updateBoardTailCurve function on boardTailCurve event", function() {
			$rootScope.$emit('tailCurve', 53);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
		});

		it("boardTailCurve event should deregister on destroy", function() {
			$rootScope.$emit('tailCurve', 53);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
			$scope.$destroy();
			$rootScope.$emit('tailCurve', 53);
			expect(sut.unity.SendMessage.calls.length).toEqual(1);
		});

		it("should send unity a message to update the tail curve", function() {
			$scope.$emit('tailCurve', 53);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
		});

		it("should have registered the grip color event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('gripColor', jasmine.any(Function));
		});

		it("should call the updateGripColor function on gripColor event", function() {
			$rootScope.$emit('gripColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('/Skateboard/Grip', 'ChangeColor', '1,0.5,1');
		});

		it("gripColor event should deregister on destroy", function() {
			$rootScope.$emit('gripColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('/Skateboard/Grip', 'ChangeColor', '1,0.5,1');
			$scope.$destroy();
			$rootScope.$emit('gripColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage.calls.length).toEqual(1);
		});

		it("should send unity a message to update the grip color", function() {
			$scope.$emit('gripColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('/Skateboard/Grip', 'ChangeColor', [1, 0.5, 1].toString());
		});

		it("should have registered the wheels color event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('wheelsColor', jasmine.any(Function));
		});

		it("should call the updateWheelsColor function on gripColor event", function() {
			$rootScope.$emit('wheelsColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'ChangeWheelsColor', [1, 0.5, 1].toString());
		});

		it("wheelsColor event should deregister on destroy", function() {
			$rootScope.$emit('wheelsColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'ChangeWheelsColor', [1, 0.5, 1].toString());
			$scope.$destroy();
			$rootScope.$emit('wheelsColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage.calls.length).toEqual(1);
		});

		it("should send unity a message to update the wheels color", function() {
			$scope.$emit('wheelsColor', [1, 0.5, 1]);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'ChangeWheelsColor', [1, 0.5, 1].toString());
		});

	});

});






















