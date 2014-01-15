(function() {

	var PresetMapperModule = angular.module('Skateshop.Services.PresetMapper', []);

	PresetMapperModule.service('PresetMapper', function() {

		this.mapTo = function(propertyName, inArray) {
			var mappedObject = {};
			for (var i = 0; i < inArray.length; i++) {
				var current= inArray[i];
				mappedObject[current[propertyName]] = current;
			}
			return mappedObject;
		};

	});

}());
