angular.module('alurapic').controller('FotosController', function($scope, $http) {

	/*var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error) {
		console.log(error);
	});*/
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = ''

	$http.get('v1/fotos')
	.success(function(fotos) {
		$scope.fotos = fotos;
	})
	.error(function(erro) {
		console.log(erro);
	});

	$scope.remover = function(foto) {
		$http.delete('v1/fotos/'+ foto._id) // O backend já está tratado para remover a foto.
		//Em success, a foto foto foi removida com sucesso no backend.
		.success(function() {
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto '+ foto.titulo +' foi removida com sucesso';
		})
		.error(function(erro) {
			console.log(erro);
			console.log('Não foi possivel remover a foto '+ foto.titulo);
		})
	};

});