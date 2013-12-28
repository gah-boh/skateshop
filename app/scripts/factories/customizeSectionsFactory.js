skateshop.factory("CustomizeSectionsFactory", function() {
	return {
		sections: [
					'Board',
					'Tape',
					'Wheels'
		],
		board: {
			presets: [
				{
					name: 'street',
					imageSource: 'board_icon_street.png'
				},
				{
					name: 'longboard pin tail',
					imageSource: 'board_icon_longboardPintail.png'
				},
				{
					name: 'cruiser',
					imageSource: 'board_icon_cruiser.png'
				}
			]
		},
		tape: {
			colors: [
				{
					name: 'black',
					hexValue: '#000'
				},
				{
					name: 'red',
					hexValue: '#ff0000'
				},
				{
					name: 'yellow',
					hexValue: '#ffff00'
				}
			]
		}
	};
});
