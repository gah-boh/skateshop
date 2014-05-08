namespace('Skateshop');

Skateshop.App = angular.module('Skateshop', ['Skateshop.Controllers.CustomizeCtrl',
											 'Unity',
											 'Skateshop.Directives.Customization',
											 'Skateshop.Factories.CustomizeSections']);

