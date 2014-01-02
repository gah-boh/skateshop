skateshop.controller('CustomizeCtrl', function($rootScope, $scope, filterFilter, CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.colors = CustomizeSectionsFactory.colors;
	this.boardPresets = CustomizeSectionsFactory.board.presets;

	this.selection = {
		title: this.customizeSections[0]
	};

	$scope.boardSettings = this.boardSettings = {
		boardLength: 0,
		noseShape: 0,
		tailShape: 0,
		tape: 0
	};

	$scope.$watch('boardSettings.boardLength', function(newValue, oldValue, scope) {
		if (newValue !== oldValue) {
			$rootScope.$emit("boardLength", {boardLength: newValue});
		};
	});

	this.selectBoardPreset = function(presetName) {
		this.loadPreset(presetName);
	};

	this.loadPreset = function(presetName) {
		var preset = filterFilter(this.boardPresets, {name: presetName})[0];
		angular.extend(this.boardSettings, preset);
	};

	this.loadPreset("street");

});