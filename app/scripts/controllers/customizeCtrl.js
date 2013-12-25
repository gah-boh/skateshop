skateshop.controller('CustomizeCtrl', function(CustomizeSectionsFactory) {
	this.customizeSections = CustomizeSectionsFactory.sections;
	this.selection = {
		title: this.customizeSections[0]
	};
});