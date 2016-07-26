angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro) {
		console.log(erro);
	});
 

	$scope.remover = function(foto) {

		recursoFoto.delete({fotoId : foto._id}, function() {
			// O backend já está tratado para remover a foto.
		    //Em success, a foto foto foi removida com sucesso no backend.
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto '+ foto.titulo +' foi removida com sucesso';
		}, function(erro) {
			console.log(erro);
			console.log('Não foi possivel remover a foto '+ foto.titulo);
		});
	};

});