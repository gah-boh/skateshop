skateshop.directive('customizeBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/customize-bar.html',
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

skateshop.directive('boardSlider', function() {
	return {
		restrict: 'A',
		scope: {
			boardSlider: '='
		},
		link: function (scope, element, attributes) {

			scope.$watch('boardSlider', function() {
				scope.updateSlider();
			});

			$(element).slider({
				min: 0.0,
				max: 100.0,
				slide: function(event, ui) {
					scope.update(ui.value);
				}
			});

			scope.update = function(aValue) {
				scope.boardSlider = aValue;
			};

			scope.updateSlider = function() {
				$(element).slider("value", scope.boardSlider);
			};

		}
	};
});















