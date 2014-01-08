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
			$rootScope.$emit('boardLength', {boardLength: 35});
			expect(sut.updateBoardLength).toHaveBeenCalled();
		});

		it("boardLength event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardLength');
			$scope.$destroy();
			$rootScope.$emit('boardLength', {boardLength: 35});
			expect(sut.updateBoardLength).not.toHaveBeenCalled();
		});

		it("should send message to unity to update current board length", function() {
			$scope.$emit('boardLength', {boardLength: 35});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BoardLength', 35);
		});

		it("should have registered the boardNoseShape event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('boardNoseShape', jasmine.any(Function))
		});

		it("should call the updateNoseShape function on the boardNoseShape event", function() {
			spyOn(sut, 'updateBoardNoseShape');
			$rootScope.$emit('boardNoseShape', {boardNoseShape: 35});
			expect(sut.updateBoardNoseShape).toHaveBeenCalledWith(35);
		});

		it("boardNoseShape event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardNoseShape');
			$scope.$destroy();
			$rootScope.$emit('boardNoseShape', {boardNoseShape: 35});
			expect(sut.updateBoardNoseShape).not.toHaveBeenCalled();
		});

		it("should send unity message to update the nose shape", function() {
			$scope.$emit('boardNoseShape', {boardNoseShape: 35});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'NoseShape', 35);
		});

		it("should have registered the boardTailShape event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('boardTailShape', jasmine.any(Function))
		});

		it("should call the updateTailShape function on the boardTailShape event", function() {
			spyOn(sut, 'updateBoardTailShape');
			$rootScope.$emit('boardTailShape', {boardTailShape: 35});
			expect(sut.updateBoardTailShape).toHaveBeenCalledWith(35);
		});

		it("boardTailShape event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardTailShape');
			$scope.$destroy();
			$rootScope.$emit('boardTailShape', {boardTailShape: 35});
			expect(sut.updateBoardTailShape).not.toHaveBeenCalled();
		});

		it("should send unity a message to update the tail shape", function() {
			$scope.$emit('boardTailShape', {boardTailShape: 35});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
		});

		it("should have registered the nose curve event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('boardNoseCurve', jasmine.any(Function));
		});

		it("should call the updateNoseCurve function on the boardNoseCurve event", function() {
			spyOn(sut, 'updateBoardNoseCurve');
			$rootScope.$emit('boardNoseCurve', {boardNoseCurve: 12});
			expect(sut.updateBoardNoseCurve).toHaveBeenCalledWith(12);
		});

		it("boardNoseCurve event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardNoseCurve');
			$scope.$destroy();
			$rootScope.$emit('boardNoseCurve', {boardNoseCurve: 12});
			expect(sut.updateBoardNoseCurve).not.toHaveBeenCalled();
		});

		it("should tell unity to update the nose curve", function(){
			$scope.$emit('boardNoseCurve', {boardNoseCurve: 12});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
		});

		it("should have registered the tail curve event", function() {
			expect($rootScope.$on).toHaveBeenCalledWith('boardTailCurve', jasmine.any(Function));
		});

		it("should call the updateBoardTailCurve function on boardTailCurve event", function() {
			spyOn(sut, 'updateBoardTailCurve');
			$rootScope.$emit('boardTailCurve', {boardTailCurve: 53});
			expect(sut.updateBoardTailCurve).toHaveBeenCalledWith(53);
		});

		it("boardTailCurve event should deregister on destroy", function() {
			spyOn(sut, 'updateBoardTailCurve');
			$scope.$destroy();
			$rootScope.$emit('boardTailCurve', {boardTailCurve: 53});
			expect(sut.updateBoardTailCurve).not.toHaveBeenCalled();
		});

		it("should send unity a message to update the tail curve", function() {
			$scope.$emit('boardTailCurve', {boardTailCurve: 53});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
		});

	});

});






















