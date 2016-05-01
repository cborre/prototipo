'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
	  
	  var pictures = $scope.pictures = [];
	  
	  var baseURL = 'http://lorempixel.com/300/180/';
	  
	  var titles = ['Comida sana', 'Salud y trabajo', 'Vida en la ciudad', 'Mantente activo', 'Cuida tu aspecto', '¡¡Vida nocturna!!'];
	  
	  var keywords = ['food', 'business', 'city', 'sports', 'fashion', 'nightlife'];
	  
	  var dummyTest = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
	  
	  $scope.addPics = function (i) {
	  	pictures.push({
			url:baseURL + keywords[i],
			title: titles[i],
			summary: dummyTest 
		});
	  };   
	  
	  for (var i=0;i<5;i++) {
		  $scope.addPics(i);
	  }
	  
	  $scope.rate = 0;
	  $scope.max = 10;
	  $scope.isReadonly = false;
	  
  });