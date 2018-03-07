(function() {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.directive('lajosProba', LajosProba);

function LajosProba(){
  var ddo = {
    templateUrl: 'lajos.html'
  };
  return ddo;
}

function FoundItems(){
  var ddo = {
    templateUrl: 'founditems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.found = [];

  ctrl.getFilteredMenuItems = function () {
    console.log("haho");
    ctrl.found = [];
    if (ctrl.searchTerm) {
      console.log(ctrl.searchTerm);
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(response){
        console.log("eddig jo");
        ctrl.found = response;
        console.log(ctrl.found);
      })
      .catch (function(error) {
        console.log("Error");
      });
    }
  };

  ctrl.removeItem = function (index) {
    ctrl.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    console.log(searchTerm);
    var lowerSearch = searchTerm.toLowerCase();
    var foundItems = [];
    return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(response){
      var items = response.data;
      for (var i = 0; i < items.menu_items.length; i++){
        if ((items.menu_items[i].name.indexOf(searchTerm) != -1) ||
        (items.menu_items[i].description.indexOf(searchTerm) != -1) ||
        (items.menu_items[i].name.indexOf(lowerSearch) != -1) ||
        (items.menu_items[i].description.indexOf(lowerSearch) != -1)) {
          foundItems.push(items.menu_items[i]);
        }
      };
      console.log(foundItems);
      return foundItems;
    })
    .catch (function(response){
      console.log("Bad response");
    });
  }
}
})();
