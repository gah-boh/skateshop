skateshop.controller('CustomizeCtrl', function($scope, EventMediator, CustomizeSectionsFactory, PresetMapper) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.colors = CustomizeSectionsFactory.colors;
	this.boardPresets = PresetMapper.mapTo('name', this.boards.presets);

	this.selection = {
		title: this.customizeSections[0]
	};

	$scope.boardSettings = this.boardSettings = {
		boardLength: 0,
		noseShape: 0,
		tailShape: 0,
		noseCurve: 0,
		tailCurve: 0,
		gripColor: 0
	};

	angular.forEach(this.boardSettings, function(value, key) {
		$scope.$watch('boardSettings.' + key, function(newValue) {
			EventMediator.emit(key, newValue);
		});
	});

	this.selectBoardPreset = function(presetName) {
		this.loadPreset(presetName);
	};

	this.loadPreset = function(presetName) {
		var preset = this.boardPresets[presetName];
		angular.extend(this.boardSettings, preset.presetSettings);
	};

	this.changeGripColor = function(color) {
		this.boardSettings.gripColor = color;
	};

	this.changeWheelsColor = function(color) {
		console.log('Wheel Color: ' + color);
	};

	this.loadPreset("street");

});