describe("Customize Section Factory", function() {

	var sut,
		presetMapperMock;

	beforeEach(module("Skateshop.Factories.CustomizeSections"));
	beforeEach(module(function($provide) {
		presetMapperMock = jasmine.createSpyObj('PresetMapperMock', ['mapTo']);
		$provide.value('PresetMapper', presetMapperMock);
	}));
	beforeEach(inject(function(CustomizeSectionsFactory){
		sut = CustomizeSectionsFactory;
	}));

	describe("mappedPresets", function() {

		it("mapped presets should call PresetMapper", function() {
			sut.mappedPresets();
			expect(presetMapperMock.mapTo).toHaveBeenCalled();
		});

		it("should call mapTo with the passed property name and board.presets", function() {
			sut.mappedPresets('name');
			expect(presetMapperMock.mapTo).toHaveBeenCalledWith('name', sut.board.presets);
		});

	});

	describe("getFormattedColor", function() {

		it("should split the string into an array", function() {
			var result = sut.getFormattedColor('rgb(10, 101, 10)');
			expect(angular.isArray(result)).toBeTruthy();
		});

		it("should only return array with the correct values each as string", function() {
			var result = sut.getFormattedColor('rgb(10, 101, 10)');
			expect(result).toEqual(['10', '101', '10']);
		});

	});

});
