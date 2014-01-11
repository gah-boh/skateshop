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

skateshop.directive('colorSelector', function() {
	return {
		restrict: 'A',
		template: '<div ng-click="colorSelected()"></div>',
		replace: true,
		scope: {
			colorSelector: '@',
			onSelect: '&'
		},
		link: function(scope, element, attributes) {

			scope.formatRGB = function(rgb) {
				return rgb.map(function(channelValue) {
					var rawValue = parseInt(channelValue) / 255;
					return Math.round(rawValue*Math.pow(10,2))/Math.pow(10,2);
				});
			};

			scope.colorSelected= function() {
				scope.onSelect({selectedColor: scope.itemColor});
			};

			element.css('background-color', scope.colorSelector);
			var results = /rgb\((\d+), (\d+), (\d+)/.exec(scope.colorSelector);
			scope.itemColor = scope.formatRGB(results.splice(1));
		}
	};
});















