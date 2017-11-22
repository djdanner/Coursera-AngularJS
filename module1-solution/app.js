// Encapsulate everything in an IIFE (iffy):  ()();
(function() {
'use strict';

// Note that the next line does not end with a ";".
// The module() function returns an instance of the module, so
// by removing the ";" we can chain this line of code with the
// line that follows it - the .controller
// so that line is actually module.controller() ???
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter){

  $scope.textBoxInput = '';
  $scope.placeholderText ='list comma separated dishes you usually have for lunch';

  $scope.processUserInput = function(){
    $scope.aaaTestString = "AAA";
  };

  // For testing:
  $scope.aaaTestString = 'A Test String.';
  $scope.aaaTestFunction = function(){
    return"Ran aaaTestFunction()\n"
  };
}

})();
