skateshop.factory("CustomizeSectionsFactory", function() {
	return {
		sections: [
					'Board',
					'Grip',
					'Wheels'
		],
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
						tailCurve: 20
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
						tailCurve: 5
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
						tailCurve: 20
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
				name: 'red',
				color: 'rgb(150, 0, 0)'
			},
			{
				name: 'yellow',
				color: 'rgb(100, 100, 0)'
			}
		]
	};
});
