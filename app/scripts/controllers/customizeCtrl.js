skateshop.controller('CustomizeCtrl', function(CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.boards = CustomizeSectionsFactory.board;
	this.tape = CustomizeSectionsFactory.tape;
	this.selection = {
		title: this.customizeSections[0]
	};
});