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
					boardLength: 30,
					noseShape: 0,
					tailShape: 50,
					noseCurve: 20,
					tailCurve: 20
				},
				{
					name: 'longboard pin tail',
					imageSource: 'board_icon_longboardPintail.png',
					boardLength: 65,
					noseShape: 20,
					tailShape: -25,
					noseCurve: 0,
					tailCurve: 5
				},
				{
					name: 'cruiser',
					imageSource: 'board_icon_cruiser.png',
					boardLength: 60,
					noseShape: 35,
					tailShape: 0,
					noseCurve: 0,
					tailCurve: 20
				}
			]
		},
		colors: [
			{
				name: 'black',
				color: 'rgb(0, 0, 0)'
			},
			{
				name: 'gray',
				color: 'rgb(125, 125, 125)'
			},
			{
				name: 'red',
				color: 'rgb(150, 0, 0)'
			},
			{
				name: 'yellow',
				color: 'rgb(200, 200, 0)'
			}
		]
	};
});
