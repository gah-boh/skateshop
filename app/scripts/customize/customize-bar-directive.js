Skateshop.Customize.directive('customizeBar', function() {
	return {
		restrict: 'E',
		templateUrl: '../../views/customize-bar.html',
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