skateshop.controller('CustomizeCtrl', function($scope, EventMediator, filterFilter, CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.colors = CustomizeSectionsFactory.colors;
	this.boardPresets = {};

	this.selection = {
		title: this.customizeSections[0]
	};

	$scope.boardSettings = this.boardSettings = {
		boardLength: 0,
		noseShape: 0,
		tailShape: 0,
		noseCurve: 0,
		tailCurve: 0,
		tape: 0
	};

	angular.forEach(this.boardSettings, function(value, key) {
		$scope.$watch('boardSettings.' + key, function(newValue) {
			EventMediator.emit(key, newValue);
		});
	});

	this.mapPresets = function(presets) {
		var mappedPresets = {};
		for (var i = 0; i < presets.length; i++) {
			var currentPreset = presets[i];
			mappedPresets[currentPreset.name] = currentPreset;
		}
		return mappedPresets;
	};

	this.boardPresets = this.mapPresets(CustomizeSectionsFactory.board.presets);

	this.selectBoardPreset = function(presetName) {
		this.loadPreset(presetName);
	};

	this.loadPreset = function(presetName) {
		var preset = this.boardPresets[presetName];
		angular.extend(this.boardSettings, preset.presetSettings);
	};

	this.changeGripColor = function(color) {
		console.log(color);
	};

	this.loadPreset("street");

});