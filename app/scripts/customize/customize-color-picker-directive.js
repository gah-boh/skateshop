Skateshop.Customize.directive('colorPicker', function() {
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
