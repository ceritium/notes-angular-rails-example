controllers = angular.module('controllers');

controllers.controller("NotesController",
    ['$scope', '$routeParams', '$location', '$resource', function($scope, $routeParams, $location, $resource) {
      $scope.notes = [
        {title: 'a title'},
        {title: 'other title'},
      ];
}]);
