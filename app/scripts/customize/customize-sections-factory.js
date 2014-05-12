Skateshop.Customize.factory("CustomizeSectionsFactory", function(PresetMapper) {

	return {
		mappedPresets: function(mapName) {
			return PresetMapper.mapTo(mapName, this.board.presets);
		},

		getFormattedColor: function(color) {
			var results = /rgb\((\d+), (\d+), (\d+)/.exec(color);
			return results.splice(1);
		},

		board: {
			presets: [
				{
					name: 'street',
					imageSource: 'board_icon_street.png',
					presetSettings: {
						boardLength: 30,
						noseShape: 0,
						tailShape: 50,
						noseCurve: 20,
						tailCurve: 20,
						wheels: 'small'
					}
				},
				{
					name: 'longboard pin tail',
					imageSource: 'board_icon_longboardPintail.png',
					presetSettings: {
						boardLength: 45,
						noseShape: 50,
						tailShape: -45,
						noseCurve: 0,
						tailCurve: 5,
						wheels: 'large'
					}
				},
				{
					name: 'cruiser',
					imageSource: 'board_icon_cruiser.png',
					presetSettings: {
						boardLength: 33,
						noseShape: 35,
						tailShape: 0,
						noseCurve: 0,
						tailCurve: 20,
						wheels: 'medium'
					}
				}
			]
		},
		colors: [
			{
				name: 'black',
				color: 'rgb(37, 37, 37)'
			},
			{
				name: 'gray',
				color: 'rgb(90, 90, 90)'
			},
			{
				name: 'white',
				color: 'rgb(200, 200, 200)'
			},
			{
				name: 'red',
				color: 'rgb(255, 0, 0)'
			},
			{
				name: 'dark red',
				color: 'rgb(100, 0, 0)'
			},
			{
				name: 'yellow',
				color: 'rgb(200, 200, 0)'
			},
			{
				name: 'dark yellow',
				color: 'rgb(155, 155, 0)'
			},
			{
				name: 'yellow green',
				color: 'rgb(100, 100, 0)'
			},
			{
				name: 'blue',
				color: 'rgb(0, 0, 200)'
			},
			{
				name: 'dark blue',
				color: 'rgb(0, 0, 100)'
			},
			{
				name: 'turquoise',
				color: 'rgb(0, 150, 150)'
			},
			{
				name: 'dark turquoise',
				color: 'rgb(0, 75, 75)'
			},
			{
				name: 'purple',
				color: 'rgb(100, 0, 100)'
			},
			{
				name: 'purple skin',
				color: 'rgb(100, 75, 75)'
			}
		],
		wheels: [
			{
				name: 'small',
				imageSource: 'wheel_icon_smallWheel.png'
			},
			{
				name: 'medium',
				imageSource: 'wheel_icon_mediumWheel.png'
			},
			{
				name: 'large',
				imageSource: 'wheel_icon_largeWheel.png'
			}
		]
	};
});

