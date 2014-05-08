namespace('Skateshop');

Skateshop.App = angular.module('Skateshop', ['Skateshop.Controllers.CustomizeCtrl',
											 'Skateshop.Controllers.UnityViewCtrl',
											 'Skateshop.Directives.Customization',
											 'Skateshop.Services.UnityObject',
											 'Skateshop.Factories.CustomizeSections']);

