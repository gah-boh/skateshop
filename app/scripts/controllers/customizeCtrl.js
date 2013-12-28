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

	this.currentValue = 0;
	this.valueChanged = function(theValue) {
		console.log('valueChanged called with: ' + theValue);
	}
	this.logValue = function() {
		console.log('The current value is: ' + this.currentValue);
	};
});