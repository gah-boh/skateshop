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
			selection: '&onSelect'
		},
		link: function(scope, element, attributes) {

			scope.colorSelected= function() {
				scope.selection({selectedColor: scope.itemColor});
			};

			element.css('background-color', scope.colorSelector);
			var results = /rgb\((\d+), (\d+), (\d+)/.exec(scope.colorSelector);
			scope.itemColor = results.map(function(inValue) {
				return parseInt(inValue);
			}).splice(1);
		}
	};
});

skateshop.directive('colorPicker', function() {
	return {
		restrict: 'A',
		scope: {
			colorPicker: '='
		},
		link: function(scope, element, attributes) {
			element.spectrum({
				color: 'rgb(0,0,0)',
				change: function(color) {
					scope.colorChanged(color);
				}
			});

			var convertRgbObjToArray = function(colorObj) {
				var colorArray = [];
				colorArray.push(colorObj.r);
				colorArray.push(colorObj.g);
				colorArray.push(colorObj.b);
				return colorArray;
			};

			scope.colorChanged = function (color) {
				var rgbObj = color.toRgb();
				scope.$apply(scope.colorPicker = convertRgbObjToArray(rgbObj));
			};
		}
	};
});















