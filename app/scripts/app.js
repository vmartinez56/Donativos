'use strict';

/**
 * @ngdoc overview
 * @name donativosApp
 * @description
 * # donativosApp
 *
 * Main module of the application.
 */
angular
  .module('donativosApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'views/zona/all.html',
          controller: 'ZonaCtrl',
          controllerAs: 'zona'
      })
      .when('/zona', {
        templateUrl: 'views/zona/all.html',
        controller: 'ZonaCtrl',
        controllerAs: 'zona'
      })
        .when('/nuevaZona', {
            templateUrl: 'views/zona/new.html',
            controller: 'NuevazonaCtrl',
            controllerAs: 'nuevaZona'
        })
        .when('/editarZona/:id', {
            templateUrl: 'views/zona/edit.html',
            controller: 'EditarzonaCtrl',
            controllerAs: 'editarZona'
        })
      .when('/sector', {
        templateUrl: 'views/sector/all.html',
        controller: 'SectorCtrl',
        controllerAs: 'sector'
      })
        .when('/nuevoSector', {
            templateUrl: 'views/sector/new.html',
            controller: 'NuevosectorCtrl',
            controllerAs: 'nuevoSector'
        })
        .when('/editarSector/:id', {
            templateUrl: 'views/sector/edit.html',
            controller: 'EditarsectorCtrl',
            controllerAs: 'editarSector'
        })
      .when('/colonia', {
        templateUrl: 'views/colonia/all.html',
        controller: 'ColoniaCtrl',
        controllerAs: 'colonia'
      })
        .when('/nuevaColonia', {
            templateUrl: 'views/colonia/new.html',
            controller: 'NuevacoloniaCtrl',
            controllerAs: 'nuevaColonia'
        })
        .when('/editarColonia/:id', {
            templateUrl: 'views/colonia/edit.html',
            controller: 'EditarcoloniaCtrl',
            controllerAs: 'editarColonia'
        })
      .when('/colaborador', {
        templateUrl: 'views/colaborador.html',
        controller: 'ColaboradorCtrl',
        controllerAs: 'colaborador'
      })
      .otherwise({
        redirectTo: '/'
      });
  });