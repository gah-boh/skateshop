describe("Unity View Ctrl Spec", function() {

	var $rootScope,
		$scope,
		sut,
		mockUnityObjectFactory,
		mediator;

	beforeEach(module(function($provide) {
		mockUnityObjectFactory = function(){
			return {
				SendMessage: jasmine.createSpy("unity send message spy")
			};
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
			spyOn(sut, 'updateBoardLength');
			$rootScope.$emit('boardLength', 35);
			expect(sut.updateBoardLength).toHaveBeenCalled();
		});

		it("boardLength event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardLength');
			$scope.$destroy();
			$rootScope.$emit('boardLength', 35);
			expect(sut.updateBoardLength).not.toHaveBeenCalled();
		});

		it("should send message to unity to update current board length", function() {
			$scope.$emit('boardLength', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BoardLength', 35);
		});

		it("should have registered the noseShape event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('noseShape', jasmine.any(Function))
		});

		it("should call the updateNoseShape function on the noseShape event", function() {
			spyOn(sut, 'updateBoardNoseShape');
			$rootScope.$emit('noseShape', 35);
			expect(sut.updateBoardNoseShape).toHaveBeenCalledWith(35);
		});

		it("boardNoseShape event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardNoseShape');
			$scope.$destroy();
			$rootScope.$emit('noseShape', 35);
			expect(sut.updateBoardNoseShape).not.toHaveBeenCalled();
		});

		it("should send unity message to update the nose shape", function() {
			$scope.$emit('noseShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'NoseShape', 35);
		});

		it("should have registered the tailShape event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('tailShape', jasmine.any(Function))
		});

		it("should call the updateTailShape function on the boardTailShape event", function() {
			spyOn(sut, 'updateBoardTailShape');
			$rootScope.$emit('tailShape', 35);
			expect(sut.updateBoardTailShape).toHaveBeenCalledWith(35);
		});

		it("boardTailShape event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardTailShape');
			$scope.$destroy();
			$rootScope.$emit('tailShape', 35);
			expect(sut.updateBoardTailShape).not.toHaveBeenCalled();
		});

		it("should send unity a message to update the tail shape", function() {
			$scope.$emit('tailShape', 35);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
		});

		it("should have registered the nose curve event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('noseCurve', jasmine.any(Function));
		});

		it("should call the updateNoseCurve function on the boardNoseCurve event", function() {
			spyOn(sut, 'updateBoardNoseCurve');
			$rootScope.$emit('noseCurve', 12);
			expect(sut.updateBoardNoseCurve).toHaveBeenCalledWith(12);
		});

		// TODO: These tests should have two expectations one to check that event was called... so they're not too brittle
		it("boardNoseCurve event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardNoseCurve');
			$scope.$destroy();
			$rootScope.$emit('noseCurve', 12);
			expect(sut.updateBoardNoseCurve).not.toHaveBeenCalled();
		});

		it("should tell unity to update the nose curve", function(){
			$scope.$emit('noseCurve', 12);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
		});

		it("should have registered the tail curve event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('tailCurve', jasmine.any(Function));
		});

		it("should call the updateBoardTailCurve function on boardTailCurve event", function() {
			spyOn(sut, 'updateBoardTailCurve');
			$rootScope.$emit('tailCurve', 53);
			expect(sut.updateBoardTailCurve).toHaveBeenCalledWith(53);
		});

		it("boardTailCurve event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardTailCurve');
			$scope.$destroy();
			$rootScope.$emit('tailCurve', 53);
			expect(sut.updateBoardTailCurve).not.toHaveBeenCalled();
		});

		it("should send unity a message to update the tail curve", function() {
			$scope.$emit('tailCurve', 53);
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
		});

	});

});






















