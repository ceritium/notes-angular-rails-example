var notes = angular.module('notes', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers'
]);

notes.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'NotesController'
    });
  }
]);

controllers = angular.module('controllers',[]);
