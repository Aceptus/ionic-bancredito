angular.module('bancaApp.purseController', [])

.controller('PurseController', ['$scope','currencyFilter','$state','ProfileService','$location',
	                      function($scope, currencyFilter, $state, ProfileService, $location){

	//Datos de prueba de monederos
	$scope.monederos = [
		{id:'50688198987', saldo:55000, alias:'BC', moneda:'colones'}
	];

	//Opciones de transferencia
	$scope.tiposTransferencia = [
		{label:'Monedero Electrónico', value:'monedero'},
		{label:'Cuenta Bancrédito', value:'bancredito'},
		{label:'Cuenta SINPE', value:'sinpe'}

	];

	//Inicialización de destino
	$scope.transferencia = {destino:{saldo:0,moneda:''}};

	//Listado de Proveedores de Telefonía Móvil, ¿consumir de webservice?
	$scope.serviceProvider = [
		{name:'ICETEL', value:'icetel'},
		{name:'CLARO', value:'claro'},
		{name:'Movistar Telefónica', value:'movistar'},
		{name:'CallMyWay', value:'callmyway'},
		{name:'Fullmovil', value:'fullmovil'},
		{name:'Tuyo Móvil', value:'tuyomovil'},
		{name:'American Data Networks', value:'americandatanetworks'},
		{name:'ALTEL', value:'altel'},
		{name:'Servicios E-Diay', value:'ediay'}
	];

	//Función para añadir símbolo de moneda
	$scope.saldoMoneda = function (saldo, moneda, tipo) {
			if (!tipo) {
				signo = ""
			} else if (tipo == "credito") {
				signo = "-"
			} else {
				signo = ""
			}
      if (moneda == 'colones') {
        return currencyFilter(saldo, "¢ " + signo)
      } else {
        return currencyFilter(saldo, "$ " + signo)
      }
    }

  $scope.doFinish = function() {
		$state.go('app.cuentas');
	}



	$scope.registerPurse = function(){
		$state.go('app.pinConfirmation');
	}

	$scope.resentPin = function(){
		return true;
	}

	$scope.validatePin = function(){
		$state.go('app.pinConfirmed');
	}

	$scope.getAccounts = ProfileService.getAccounts();

	$scope.automaticRecharge = function(){
		$location.path('#/app/transactioncompleted/:PurseController');

	}
	$scope.successMessage = "Exito!!";

}]);