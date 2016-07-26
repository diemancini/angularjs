angular.module('alurapic').controller('FotoController', function($scope, $http) {

	$scope.foto = {};
	$scope.mensagem = '';

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			console.log($scope.foto);
			$http.post('v1/fotos', $scope.foto)
			.success(function() {
				$scope.foto = {};
				$scope.mensagem = 'Foto incluída com sucesso';
				console.log('Foto cadastrada com sucesso')
			})
			.error(function(erro) {
				$scope.mensagem = 'Foto não incluída';
				console.log(erro);
			});
		}
	}
});