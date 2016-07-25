angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.fotos = [];
		/*{
			titulo: 'Leão',
			url: 'http://img1.topimagens.com/ti/leoes/leoes_002.jpg'
		},
		{
			titulo: 'Leão 2',
			url: 'http://img1.topimagens.com/ti/leoes/leoes_002.jpg'
		},
		{
			titulo: 'Leão 3',
			url: 'http://img1.topimagens.com/ti/leoes/leoes_002.jpg'
		},
		{
			titulo: 'Leão 4',
			url: 'http://img1.topimagens.com/ti/leoes/leoes_002.jpg'
		}
	];*/

	/*var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error) {
		console.log(error);
	});*/
	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});
});