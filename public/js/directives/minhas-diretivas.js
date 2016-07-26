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
})
.directive('meuBotaoPerigo', function() {

	var ddo = {};
	ddo.restrict = "E";

	ddo.scope = {
		nome: '@', // Recebe da view uma string
		acao: '&'  // Recebe da view uma expressão (função)
	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

	return ddo;
});