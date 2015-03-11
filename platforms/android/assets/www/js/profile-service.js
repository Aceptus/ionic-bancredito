angular.module('bancaApp.profileService', [])

.service('ProfileService', [function(){

	this.myAccounts =[
  		{id:10528396,    saldo:107000, desc:'Ahorro Colones', moneda:'colones'},
  		{id:1009795624,  saldo:15000,  desc:'Ahorro Dólares', moneda:'dolares'},
  		{id:50688198987, saldo:25000,  desc:'Monedero',       moneda:'colones'}
  ];

	this.getAccounts = function (){
		return this.myAccounts;
	}

}]);