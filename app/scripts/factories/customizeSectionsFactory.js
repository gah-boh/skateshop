skateshop.factory("CustomizeSectionsFactory", function() {
	return {
		sections: [
					'Board',
					'Tape',
					'Trucks',
					'Wheels'
		],
		board: {
			presets: [
				{
					name: 'street'
				},
				{
					name: 'longboard pin tail'
				},
				{
					name: 'cruiser'
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
