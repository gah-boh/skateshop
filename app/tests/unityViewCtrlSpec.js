describe("Unity View Ctrl Spec", function() {

	var $scope,
		sut;

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

	describe("Presets", function() {

		it('boardPresetSelected event should be registered', function() {
			expect($scope.$on).toHaveBeenCalledWith('boardPresetSelected', jasmine.any(Function));
		});

		it("boardPresetSelected event should unbind itself when it's going to be destroyed", function() {
			spyOn(sut, 'boardPresetEvent').andCallThrough();
			$scope.$destroy();
			expect(sut.boardPresetEvent).toHaveBeenCalled();
		});

		it("should set the controllers board object from the recieved object", function() {
			$scope.$emit('boardPresetSelected', {board: 20});
			expect(sut.currentBoard.board).toBe(20);
		});

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

		it("should update the board length on the boardLength event", function() {
			$scope.$emit('boardLength', {boardLength: 35});
			expect(sut.currentBoard.boardLength).toBe(35);
		});

		it("should have registered the boardNoseShape event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardNoseShape', jasmine.any(Function))
		});

		it("boardNoseShape event should deregister on destroy", function() {
			spyOn(sut, 'boardNoseShapeEvent').andCallThrough();
			$scope.$destroy();
			expect(sut.boardNoseShapeEvent).toHaveBeenCalled();
		});

		it("should update the board length on the boardNoseShape event", function() {
			$scope.$emit('boardNoseShape', {boardNoseShape: 35});
			expect(sut.currentBoard.boardNoseShape).toBe(35);
		});

		it("should have registered the boardTailShape event", function() {
			expect($scope.$on).toHaveBeenCalledWith('boardTailShape', jasmine.any(Function))
		});

		it("boardTailShape event should deregister on destroy", function() {
			spyOn(sut, 'boardTailShapeEvent').andCallThrough();
			$scope.$destroy();
			expect(sut.boardTailShapeEvent).toHaveBeenCalled();
		});

		it("should update the board length on the boardTailShape event", function() {
			$scope.$emit('boardTailShape', {boardTailShape: 35});
			expect(sut.currentBoard.boardTailShape).toBe(35);
		});

	});

});






















