//---------------------------------------------------------------------
// Dan Danner
// 11/22/2017
//
// Coursera Course:  Single Page Web Applications with AngularJS
// https://www.coursera.org/learn/single-page-web-apps-with-angularjs
//---------------------------------------------------------------------

// Encapsulate everything in an IIFE (iffy) to prevent symbol
// leakage to the global scope:
//     ()();
//     (function () { })();
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

// This structure safely injects the scope into the Controller and protects it
// against corruption during Minification.
LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter){
  $scope.textBoxInput = '';
  $scope.fedbackMessageToUser= 'Welcome!';
  $scope.placeholderText ='list comma separated dishes you usually have for lunch';
  $scope.warningMessageAboutEmptyItems = "This DOES NOT consider and empty item, i.e., `, ,` as an item towards to the count.";

  //---------------------------------------------------------------------
  // The user enters a comma-separated list of the items they are having
  // for lunch, and then presses the "Check if Too Much" button which
  // calls this function.
  // This function process that input and then displays one of the following
  // messages based on numItemsForLunch:
  //      0    "Please enter data first"
  //    <= 3   "Enjoy!"
  //     > 3   "Too much!"
  //---------------------------------------------------------------------
  $scope.checkIfTooMuchButtonClick = function(){
    // $scope.aaaTestString = 'AAA';

    var separator = ',';
    var stringToSplit = $scope.textBoxInput;

    var arrayOfStrings = stringToSplit.split(separator);
    var numItemsForLunch = arrayOfStrings.length;

    console.clear();
    console.log('The original string is: "' + stringToSplit + '"');
    console.log('The separator is: "' + separator + '"');
    console.log('The array has ' + numItemsForLunch + ' elements: ' + arrayOfStrings.join(' / '));

    var k = 1;
    for (var s of arrayOfStrings){
      // If it's an empty string, or a string of all spaces,
      // then don't count it.

      // if (!s) {
      //   numItemsForLunch--;
      //   console.log('Empty string.');
      // }
      var allBlanks = true;

      // for (var i = 0; i < s.length; i++){
      //   if (s[i] != '\u0020') allBlanks = false;
      // }

      for (var i = 0; i < s.length; i++){
        console.log('k= ' + k);

        if (!s) {
          console.log('k= ' + k);
          console.log('Empty string.');
        }
        if (s[i] != ' '){
          console.log('k= ' + k);
          console.log('Not all blanks.');
          allBlanks = false;
        }
      }

      if (allBlanks) numItemsForLunch--;

      k++;
      // console.log('Substring length: ' + s.length);
    }

    console.log('numItemsForLunch filtered: ' + numItemsForLunch );

    if (numItemsForLunch == 0)
        $scope.fedbackMessageToUser= 'Please enter data first';
    else if (numItemsForLunch <= 3)
        $scope.fedbackMessageToUser= 'Enjoy!';
    else if (numItemsForLunch > 3)
        $scope.fedbackMessageToUser= 'Too much!';
  };

  //---------------------------------------------------------------------
  // For initial testing:
  $scope.aaaTestString = 'A Test String.';
  $scope.aaaTestFunction = function(){
    return"Ran aaaTestFunction()\n"
  //---------------------------------------------------------------------
  };
}

})();  // end of IIFE
