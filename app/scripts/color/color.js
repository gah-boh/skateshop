(function() {

var Color = angular.module('Color', []);

Color.service('ColorFormatter', function() {

	this.formatRGB = function(rgb) {
		return rgb.map(function(channelValue) {
			var rawValue = parseInt(channelValue) / 255;
			return Math.round(rawValue*Math.pow(10,2))/Math.pow(10,2);
		});
	};

});

}());
