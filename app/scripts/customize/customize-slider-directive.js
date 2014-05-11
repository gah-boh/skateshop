Skateshop.Customize.directive('slider', function() {
	return {
		restrict: 'A',
		scope: {
			boardSlider: '='
		},
		link: function (scope, element, attributes) {

			scope.$watch('boardSlider', function() {
				scope.updateSlider();
			});

			element.slider({
				min: parseInt(attributes.min) || 0.0,
				max: parseInt(attributes.max) || 100.0,
				slide: function(event, ui) {
					scope.update(ui.value);
				}
			});

			scope.update = function(aValue) {
				scope.$apply( scope.boardSlider = aValue );
			};

			scope.updateSlider = function() {
				$(element).slider("value", scope.boardSlider);
			};

		}
	};
});
