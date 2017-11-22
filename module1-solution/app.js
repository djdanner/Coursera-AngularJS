// Dan Danner
// 11/22/2017
//
// Coursera Course:  Single Page Web Applications with AngularJS
// https://www.coursera.org/learn/single-page-web-apps-with-angularjs

// Encapsulate everything in an IIFE (iffy) to prevent
// leakage to the global scope:  ()();
// (function () { })();
// IIFE = Immediately Invoked Function Expression
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
  $scope.fedbackMessageToUser= 'Welcome!';
  $scope.placeholderText ='list comma separated dishes you usually have for lunch';

  // The user enters a comma-separated list of the items they are having
  // for lunch, and then presses the "Check if Too Much" button which
  // calls this function.
  // This function process that input and then displays one of the following
  // messages based on numItemsForLunch:
  //      0    "Please enter data first"
  //    <= 3   "Enjoy!"
  //     > 3   "Too much!"
  $scope.checkIfTooMuchButtonClick = function(){
    $scope.aaaTestString = 'AAA';
    
  };

  // For testing:
  $scope.aaaTestString = 'A Test String.';
  $scope.aaaTestFunction = function(){
    return"Ran aaaTestFunction()\n"
  };
}

})();  // end of IIFE
