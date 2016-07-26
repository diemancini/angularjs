angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {

	var ddo = {}; //directive definition object

	ddo.restrict = "AE"; // Attribute Element

	ddo.scope = {
		titulo: '@'
	};

	ddo.transclude = true; // reconhece os elementos filhos em index.html. Exemplo de elemento filho: <img>.

	ddo.templateUrl = "js/directives/meu-painel.html";

	return ddo;
})
.directive('minhaFoto', function() {
	var ddo = {}; //directive definition object

	ddo.restrict = "AE"; // Attribute Element

	ddo.scope = {
		url: '@'
	};

	//ddo.transclude = true; // reconhece os elementos filhos em index.html. Exemplo de elemento filho: <img>.

	ddo.templateUrl = "js/directives/minha-foto.html";

	return ddo;
});