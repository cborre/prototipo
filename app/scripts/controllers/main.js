'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL='http://lorempixel.com/960/450/';
	$scope.setInterval = 5000;
	$scope.slides = [
	{
		title: 'Aprende a mantenerte en forma',
		image: baseURL + 'sports/',
		text: '¡Practica algún deporte todos los días!'
	},
	{
		title: 'Buena alimentación',
		image: baseURL + 'food/',
		text: '¡La importancia de frutas y verduras en la dieta!'
	},
	{
		title: 'En contacto con la naturaleza',
		image: baseURL + 'nature/',
		text: '¡Mantente en armonía con la naturaleza!'
	}];	
	
	baseURL='http://lorempixel.com/200/200/';	
	$scope.contenido = [
	{		
		img: baseURL + 'people',
		title: 'Sobre Nosotros',
		sumario: 'Somos una empresa comprometida con la vida sana'
	},
	{
		img: baseURL + 'business',
		title: 'Nuestros Servicios',		
		sumario: 'Ofrecemos asesoría profesional para mantenerse sanos, buena alimentación'
	},
	{
		img: baseURL + 'transport',
		title: 'Contáctanos',		
		sumario: '#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
	}];	
  });
