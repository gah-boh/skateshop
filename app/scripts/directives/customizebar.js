skateshop.directive('customizeBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/customize-bar.html',
		replace: true,
		scope: {
		},
		link: function(scope, element) {
			scope.isActive = false;
			scope.toggleVisible = function() {
				element.addClass("active-section");
				scope.isActive = !scope.isActive;
			};
		}
	}
});