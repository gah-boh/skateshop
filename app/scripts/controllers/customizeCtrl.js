skateshop.controller('CustomizeCtrl', function($rootScope, $scope, filterFilter, CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.colors = CustomizeSectionsFactory.colors;
	this.boardPresets = CustomizeSectionsFactory.board.presets;

	this.selection = {
		title: this.customizeSections[0]
	};

	$scope.boardSettings = {
		boardLength: 0,
		noseShape: 0,
		tailShape: 0,
		tape: 0
	};

	$scope.$watch('boardSettings.boardLength', function(newValue, oldValue, scope) {
		if (newValue !== oldValue) {
			console.log("testing");
		};
	});

	this.selectBoardPreset = function(presetName) {
		this.loadPreset(presetName);
		$rootScope.$emit('boardPresetSelected', $scope.boardSettings);
	};

	this.loadPreset = function(presetName) {
		var preset = filterFilter(this.boardPresets, {name: presetName})[0];
		angular.extend($scope.boardSettings, preset);
	};

	this.loadPreset("street");

});