skateshop.controller('CustomizeCtrl', function($scope, EventMediator, CustomizeSectionsFactory, PresetMapper) {

	var customizeCtrl = this;

	customizeCtrl.customizeSections = CustomizeSectionsFactory.sections;
	customizeCtrl.boards = CustomizeSectionsFactory.board;
	customizeCtrl.colors = CustomizeSectionsFactory.colors;
	customizeCtrl.boardPresets = PresetMapper.mapTo('name', customizeCtrl.boards.presets);

	customizeCtrl.selection = {
		title: customizeCtrl.customizeSections[0]
	};

	$scope.boardSettings = customizeCtrl.boardSettings = {
		boardLength: 0,
		noseShape: 0,
		tailShape: 0,
		noseCurve: 0,
		tailCurve: 0,
		gripColor: CustomizeSectionsFactory.getFormattedColor(customizeCtrl.colors[0].color),
		wheelsColor: CustomizeSectionsFactory.getFormattedColor(customizeCtrl.colors[3].color)
	};

	angular.forEach(customizeCtrl.boardSettings, function(value, key) {
		$scope.$watch('boardSettings.' + key, function(newValue) {
			EventMediator.emit(key, newValue);
		});
	});

	customizeCtrl.selectBoardPreset = function(presetName) {
		customizeCtrl.loadPreset(presetName);
	};

	customizeCtrl.loadPreset = function(presetName) {
		var preset = customizeCtrl.boardPresets[presetName];
		angular.extend(customizeCtrl.boardSettings, preset.presetSettings);
	};

	customizeCtrl.changeGripColor = function(color) {
		customizeCtrl.boardSettings.gripColor = color;
	};

	customizeCtrl.changeWheelsColor = function(color) {
		customizeCtrl.boardSettings.wheelsColor = color;
	};

	customizeCtrl.loadPreset("street");

});