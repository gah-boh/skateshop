skateshop.directive('customizeBar', function() {
	return {
		restrict: 'E',
//		templateUrl: 'views/customize-bar.html',
		template: '<div class="customize-section" ng-click="toggleActive()" ng-class="{\'active-section\': title==activeSelection}">{{title}}</div>',
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
	}
});