skateshop.controller('CustomizeCtrl', function(filterFilter, $rootScope, CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.colors = CustomizeSectionsFactory.colors;
	this.boardPresets = CustomizeSectionsFactory.board.presets;

	this.selection = {
		title: this.customizeSections[0]
	};

	this.boardSettings = {
		boardLength: 0,
		noseShape: 0,
		tailShape: 0,
		tape: 0
	};

	this.selectBoardPreset = function(presetName) {
		this.loadPreset(presetName);
		$rootScope.$emit('boardPresetSelected', this.boardSettings);
	};

	this.loadPreset = function(presetName) {
		var preset = filterFilter(this.boardPresets, {name: presetName})[0];
		angular.extend(this.boardSettings, preset);
	};

	this.loadPreset("street");

});