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
					noseShape: 50,
					tailShape: 50
				},
				{
					name: 'longboard pin tail',
					imageSource: 'board_icon_longboardPintail.png',
					boardLength: 85,
					noseShape: 80,
					tailShape: 10
				},
				{
					name: 'cruiser',
					imageSource: 'board_icon_cruiser.png',
					boardLength: 60,
					noseShape: 60,
					tailShape: 30
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
