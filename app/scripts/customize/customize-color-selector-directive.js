Skateshop.Customize.directive('colorSelector', function() {
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
