(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    var categories = [];
    return $http.get("https://davids-restaurant.herokuapp.com/categories.json").
    then (function (response) {
        var responseList = response.data;
        responseList.forEach(function(item){
          categories.push(item)
        });
        return categories;
      })
  };

  service.getItemsForCategory = function (categoryShortName) {
     var items = [];
     var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
     return $http.get(url).
     then (function (response) {
         var responseList = response.data.menu_items;
         responseList.forEach(function(item){
           items.push(item)
         });
         return items;
       })
  };
}
})();
