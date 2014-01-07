describe("Unity View Ctrl Spec", function() {

	var $scope,
		sut,
		mockUnityObjectFactory;

	beforeEach(module(function($provide) {
		mockUnityObjectFactory = function(){
			return {
				SendMessage: jasmine.createSpy("unity send message spy")
			};
		};
		$provide.value('UnityObjectFactory', mockUnityObjectFactory);
	}));
	beforeEach(module('Skateshop'));
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope;
		spyOn($scope, '$on').andCallThrough();
		sut = $controller('UnityViewCtrl as sut', {$scope: $scope});
		$scope.$digest();
	}));

	afterEach(function() {
		$scope.$destroy();
	});

	describe("board parameters updated", function() {

		it("should have registered the boardLength event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardLength', jasmine.any(Function))
		});

		it("boardLength event should deregister on destroy", function() {
			spyOn(sut, 'boardLengthEvent').andCallThrough();
			$scope.$destroy();
			expect(sut.boardLengthEvent).toHaveBeenCalled();
		});

		it("should send message to unity to update current board length", function() {
			$scope.$emit('boardLength', {boardLength: 35});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BoardLength', 35);
		});

		it("should have registered the boardNoseShape event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardNoseShape', jasmine.any(Function))
		});

		it("boardNoseShape event should deregister on destroy", function() {
			spyOn(sut, 'boardNoseShapeEvent').andCallThrough();
			$scope.$destroy();
			expect(sut.boardNoseShapeEvent).toHaveBeenCalled();
		});

		it("should send unity message to update the nose shape", function() {
			$scope.$emit('boardNoseShape', {boardNoseShape: 35});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'NoseShape', 35);
		});

		it("should have registered the boardTailShape event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardTailShape', jasmine.any(Function))
		});

		it("boardTailShape event should deregister on destroy", function() {
			spyOn(sut, 'boardTailShapeEvent').andCallThrough();
			$scope.$destroy();
			expect(sut.boardTailShapeEvent).toHaveBeenCalled();
		});

		it("should send unity a message to update the tail shape", function() {
			$scope.$emit('boardTailShape', {boardTailShape: 35});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'TailShape', 35);
		});

		it("should have registered the nose curve event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardNoseCurve', jasmine.any(Function));
		});

		it("boardNoseCurve event should deregister on destroy", function() {
			spyOn(sut, 'boardNoseCurveEvent');
			$scope.$destroy();
			expect(sut.boardNoseCurveEvent).toHaveBeenCalled();
		});

		it("should tell unity to update the nose curve", function(){
			$scope.$emit('boardNoseCurve', {boardNoseCurve: 12});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendNose', 12);
		});

		it("should have registered the tail curve event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardTailCurve', jasmine.any(Function));
		});

		it("boardTailCurve event should deregister on destroy", function() {
			spyOn(sut, 'boardTailCurveEvent');
			$scope.$destroy();
			expect(sut.boardTailCurveEvent).toHaveBeenCalled();
		});

		it("should send unity a message to update the tail curve", function() {
			$scope.$emit('boardTailCurve', {boardTailCurve: 53});
			expect(sut.unity.SendMessage).toHaveBeenCalledWith('Skateboard', 'BendTail', 53);
		});

	});

});






















