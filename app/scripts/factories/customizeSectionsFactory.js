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
		}
	};
});
