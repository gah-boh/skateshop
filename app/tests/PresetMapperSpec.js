ddescribe("Preset Mapper", function() {

	var sut,
		mockObject;

	beforeEach(module('Skateshop'));
	beforeEach(inject(function(PresetMapper) {
			sut = PresetMapper;
			mockObject = [
				{
					name: 'one',
					someValue: 1
				},
				{
					name: 'two',
					someValue: 2
				},
				{
					name: 'three',
					someValue: 3
				},
				{
					name: 'four',
					someValue: 4
				}
			];
	}));

	it('should return an object for the given array', function() {
		var result = sut.mapTo('name', mockObject);
		expect(angular.isArray(result)).toBeFalsy();
	});

	it("should return the object with correct keys for given parameter", function() {
		var result = sut.mapTo('name', mockObject);
		var keys = Object.keys(result);
		expect(keys).toEqual(['one', 'two', 'three', 'four']);
	});

});