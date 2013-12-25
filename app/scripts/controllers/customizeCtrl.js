skateshop.controller('CustomizeCtrl', function($scope, CustomizeSectionsFactory) {
	$scope.customizeSections = CustomizeSectionsFactory.sections;
});