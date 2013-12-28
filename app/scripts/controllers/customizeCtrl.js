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

	this.selectBoardPreset = function(boardPreset) {
		this.loadPreset(boardPreset);
		$rootScope.$emit('boardPresetSelected', boardPreset);
	};

	this.loadPreset = function(presetName) {
		var preset = filterFilter(this.boardPresets, {name: presetName})[0];
		angular.extend(this.boardSettings, preset);
	};

	this.loadPreset("street");

});