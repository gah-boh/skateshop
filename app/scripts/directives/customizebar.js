skateshop.directive('customizebar', function() {
	return {
		restrict: 'E',
		templateUrl: '../../views/customize-bar.html',
		scope: {
			sections: '@'
		}
	}
});