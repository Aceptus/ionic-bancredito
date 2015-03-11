// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bancaApp', ['ionic','bancaApp.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('ingrese', {
      url: "/",
      templateUrl: "templates/ingrese.html",
      controller:"LoginController"
  })

  .state('claveDinamica', {
      url: "/clave-dinamica",
      templateUrl: "templates/clave-dinamica.html",
      controller:"LoginController"
  })

  .state('tipoCambio', {
      url: "/tipo-cambio",
      templateUrl: "templates/tipo-cambio.html",
      controller:"LoginController"
  })

  //Abstract template for inner App
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  .state('app.contactenos', {
    url: "/contactenos",
    views: {
      'menuContent':{
        templateUrl: "templates/contactenos.html"
      }
    }
  })

  .state('app.cuentas', {
    url: "/cuentas",
    views: {
      'menuContent':{
        templateUrl: "templates/cuentas.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.tarjetas', {
    url: "/tarjetas",
    views: {
      'menuContent':{
        templateUrl: "templates/tarjetas.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.cuenta', {
    url: "/cuentas/:idCuenta",
    views: {
      'menuContent':{
        templateUrl: "templates/detalle-cuenta.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.movimientos', {
    url: "/movimientos/:idCuenta",
    views: {
      'menuContent':{
        templateUrl: "templates/detalle-movimientos.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.tarjeta', {
    url: "/tarjeta/:idCuenta",
    views: {
      'menuContent':{
        templateUrl: "templates/detalle-tarjeta.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.monedero', {
    url: "/monedero/:idCuenta",
    views: {
      'menuContent':{
        templateUrl: "templates/detalle-monedero.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.transferencias', {
    url: "/transferencias",
    views: {
      'menuContent':{
        templateUrl: "templates/transferencias.html",
        controller:"CuentasController"
      }
    }
  })

  .state('app.claveDinamicaOperacion', {
      url: "/clave-dinamica-operacion",
      views: {
        'menuContent': {
          templateUrl: "templates/clave-dinamica-operacion.html",
          controller:"LoginController"
        }
      }

  })

  .state('app.transferenciaProcesada', {
      url: "/transferencia-procesada",
      views: {
        'menuContent': {
          templateUrl: "templates/detalle-transferencia-procesada.html",
          controller:"LoginController"
        }
      }

  })

  .state('app.pagos', {
    url: "/pagos",
    views: {
      'menuContent':{
        templateUrl: "templates/pagos.html",
        controller:"PagosController"
      }
    }
  })

  .state('app.categoriasServicios', {
    url: "/categorias-servicio",
    views: {
      'menuContent':{
        templateUrl: "templates/categorias-servicio.html",
        controller:"PagosController"
      }
    }
  })

  .state('app.pagoServicios', {
    url: "/pago-servicios/:idCategoria",
    views: {
      'menuContent':{
        templateUrl: "templates/pago-servicios.html",
        controller:"PagosController"
      }
    }
  })

  .state('app.pagoServicio', {
    url: "/pago-servicio/:idServicio",
    views: {
      'menuContent':{
        templateUrl: "templates/pago-servicio.html",
        controller:"PagosController"
      }
    }
  })

  .state('app.pagoServicioTelefonico', {
    url: "/pago-servicio-telefonico/:idTelefono",
    views: {
      'menuContent':{
        templateUrl: "templates/pago-servicio-telefonico.html",
        controller:"CuentasController"
      }
    }
  })


  .state('app.comprobantePagoServicioTelefonico', {
    url: "/comprobante-pago-servicio-telefonico/:idTelefono",
    views: {
      'menuContent':{
        templateUrl: "templates/comprobante-pago-servicio-telefonico.html",
        controller:"CuentasController"
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

}])
