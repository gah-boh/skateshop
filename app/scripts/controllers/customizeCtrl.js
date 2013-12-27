skateshop.controller('CustomizeCtrl', function($rootScope, CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.tape = CustomizeSectionsFactory.tape;
	this.selection = {
		title: this.customizeSections[0]
	};

	this.selectBoardPreset = function(boardPreset) {
		$rootScope.$emit('boardPresetSelected', boardPreset);
	};
});