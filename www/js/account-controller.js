angular.module('bancaApp.accountController', ['ngCordova'])

.controller('AccountController', ['$scope','currencyFilter','$state', function($scope, currencyFilter, $state){
	//Datos de prueba de cuentas bancarias
	$scope.cuentas = [
			{tipo:'Ahorro Dólares', id:'1009795624',  saldo:15000,  moneda:'dolares', titular:'Carlos Pravia Jácamo'},
      {tipo:'Ahorro Colones', id:'10528396',    saldo:107000, moneda:'colones', titular:'Theodore Hope'}
    ];

  $scope.misCuentas =[
  		{id:10528396,    saldo:107000, desc:'Ahorro Colones', moneda:'colones'},
  		{id:1009795624,  saldo:15000,  desc:'Ahorro Dólares', moneda:'dolares'},
  		{id:50688198987, saldo:25000,  desc:'Monedero',       moneda:'colones'}
  ];

	//Datos de prueba de cuentas sinpe
	$scope.cuentasSinpe = [
      {tipo:'Ahorro Colones', id:'10200009074412723',  saldo:107000, moneda:'colones', emisor:'BAC San José', titular:'Carlos Pravia Jácamo'},
      {tipo:'Ahorro Dólares', id:'15201001022918231',  saldo:15000,  moneda:'dolares', emisor:'BCR', titular:'Theodore Hope'},
      {tipo:'Ahorro Colones', id:'11600301101793110',  saldo:15000,  moneda:'colones', emisor:'PROMERICA', titular:'Jorge Jiménez Arroyo'},
      {tipo:'Ahorro Dólares', id:'11600301101782119',  saldo:15000,  moneda:'dolares', emisor:'PROMERICA', titular:'Eulices Nicot Alemán'}


    ];

  //Datos de prueba para movimientos de una cuenta bancaria
	$scope.movimientos = [
      {id:'13136551',fecha:'31 ene 2015 10:30:45 am', saldo:45, moneda:'dolares',tipo:'credito', desc:'PAGO ALMUERZO'},
      {id:'13100550',fecha:'15 ene 2015 09:15:30 pm', saldo:1500, moneda:'dolares',tipo:'dark', desc:'QUINCENA 1-15 Enero'},
      {id:'12100502',fecha:'14 ene 2015 11:20:00 am', saldo:4.72, moneda:'dolares',tipo:'dark', desc:'INTERESES'},
      {id:'12010300',fecha:'05 ene 2015 10:30:15 am', saldo:400, moneda:'dolares',tipo:'credito', desc:'MARCHAMO 2015'},
      {id:'10107689',fecha:'03 ene 2015 08:30:03 pm', saldo:50, moneda:'dolares',tipo:'credito', desc:'DENTISTA'}

    ];

	//Datos de prueba de tarjetas
	$scope.tarjetas = [
		{tipo:'MASTERCARD',	id:'5158', disponibles:[{credito:250204.52,    moneda:'colones'},{credito:500,  moneda:'dolares'}]},
		{tipo:'VISA',	      id:'2209', disponibles:[{credito:500007204.52, moneda:'colones'},{credito:9500, moneda:'dolares'}]}

	];

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
		};
}]);