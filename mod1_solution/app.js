(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.foods = "";
  $scope.message = "";
  $scope.messageMaker = function() {
    if ($scope.foods == "") {
      $scope.message = "Please enter data first"
    } else {
      var array = $scope.foods.split(',');
      var notFood = 0; //
      for (var i=0; i<array.length; i++) {
        if (array[i].trim() == "" ) {
          notFood += 1;
        }
      }
      if (array.length - notFood < 1) {
        $scope.message = "Nothing is not enough";
      } else if (array.length - notFood < 4) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much :(";
      }
    }
  }
}
})();
