describe("Color Service", function() {
	var sut;

	beforeEach(module('Skateshop'));

	beforeEach(inject(function(ColorService) {
		sut = ColorService;
	}));

	it("should normalize the colorValues", function() {
		var result = sut.formatRGB([255, 255, 255]);
		expect(result).toEqual([1, 1, 1]);
	});

	it("should limit the float to two decimal places", function() {
		var result = sut.formatRGB([127, 127, 127]);
		expect(result).toEqual([0.5, 0.5, 0.5]);
	});

	it("should limit the float to 0.25 when given ", function() {
		var result = sut.formatRGB([65, 65, 65]);
		expect(result).toEqual([0.25, 0.25, 0.25]);
	});

});