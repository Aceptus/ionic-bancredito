angular.module('bancaApp.controllers', ['ngCordova'])

.controller('LoginController', ['$scope','$state', '$cordovaDevice', function($scope, $state, $cordovaDevice){
	// Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		$state.go('app.cuentas');
	};

	$scope.doClaveDinamica = function() {
		console.log('Ingresando', $scope.loginData);
		$state.go('claveDinamica');
	};

	var init = function() {
    console.log("initializing device");
    try {
        $scope.uuid = $cordovaDevice.getUUID();
    } catch (err) {
        console.log("Error " + err.message);

    }
	};
	init();
}])

.controller('PagosController', ['$scope','currencyFilter', function($scope, currencyFilter){
	//Ejemplos de categorias de servicio
	$scope.categoriasServicios = [
		{name:'Agua', id:'agua', url:"/#/app/pago-servicios.html"},
		{name:'Luz', id:'luz', url:"/#/app/pago-servicios.html"},
		{name:'Internet', id:'internet', url:"/#/app/pago-servicios.html"},
		{name:'Telefonía', id:'telefonia', url:"/#/app/pago-servicios.html"},
		{name:'Municipalidades', id:'municipalidades', url:"/#/app/pago-servicios.html"},
		{name:'Centros Educativos', id:'centrosEducativos', url:"/#/app/pago-servicios.html"},
		{name:'CCSS', id:'ccss', url:"/#/app/pago-servicios.html"},
		{name:'TV por cable y satélite', id:'cableras', url:"/#/app/pago-servicios.html"},
		{name:'Empresas de Seguridad', id:'seguridad', url:"/#/app/pago-servicios.html"}
	];

	//Ejemplos de proveedores de servicio
	$scope.servicios = [
		{name:'ICETEL', id:'icetel'},
		{name:'CLARO', id:'claro'},
		{name:'Movistar Telefónica', id:'movistar'},
		{name:'CallMyWay', id:'callmyway'},
		{name:'Fullmovil', id:'fullmovil'},
		{name:'Tuyo Móvil', id:'tuyomovil'},
		{name:'American Data Networks', id:'americandatanetworks'},
		{name:'ALTEL', id:'altel'},
		{name:'Servicios E-Diay', id:'ediay'}
	];
}])