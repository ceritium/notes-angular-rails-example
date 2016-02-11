controllers = angular.module('controllers');

controllers.controller("NotesController",
    ['$scope', '$routeParams', '$location', '$resource', function($scope, $routeParams, $location, $resource) {

    var Note = $resource('/notes/:noteId.json', {noteId: "@id"});

    var getNotes = function(){
      Note.query({}, function(notes) {
        $scope.notes = notes;
        return $scope.notes;
      });
    };

    getNotes();

    $scope.create = function(){
      if ($scope.noteTitle){
        var note = new Note({title: $scope.noteTitle});
        note.$save().then(function(note){
          $scope.notes.push(note);
          $scope.noteTitle = "";
        });
      }
    };

    $scope.destroy = function(noteId){
      var note = Note.get({noteId: noteId}, function() {
        note.$delete().then(function(){
          getNotes();
        });
      });
    };
}]);
