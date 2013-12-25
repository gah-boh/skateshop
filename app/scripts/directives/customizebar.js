skateshop.directive('customizeBar', function() {
	return {
		restrict: 'E',
//		templateUrl: 'views/customize-bar.html',
		template: '<div class="customize-section" ng-click="toggleActive()" ng-class="{activeSection: title==activeSelection.title}">{{title}}</div>',
		replace: true,
		scope: {
			title: '@',
			activeSelection: '='
		},
		link: function(scope) {
			scope.toggleActive = function() {
				scope.activeSelection.title = scope.title;
			};
		}
	}
});