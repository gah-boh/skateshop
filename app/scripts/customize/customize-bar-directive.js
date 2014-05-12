Skateshop.Customize.directive('customizeBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'scripts/customize/customize-bar-directive.html',
		replace: true,
		scope: {
			title: '@',
			activeSelection: '='
		},
		link: function(scope) {
			scope.toggleActive = function() {
				scope.activeSelection = scope.title;
			};
		}
	};
});