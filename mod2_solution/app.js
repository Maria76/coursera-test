(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.shopping = function (itemIndex) {
      ShoppingListCheckOffService.changeItem(itemIndex);
    }
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }



  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
      {
        name: "Apples",
        quantity: "10"
      },
      {
        name: "Bananas",
        quantity: "20"
      },
      {
        name: "Cookies",
        quantity: "30"
      },
      {
        name: "Donuts",
        quantity: "40"
      },
      {
        name: "Pizzas",
        quantity: "50"
      }
    ];

    var boughtItems = [];

    service.changeItem = function (itemIndex){
      var item = {
        name: toBuyItems[itemIndex].name,
        quantity: toBuyItems[itemIndex].quantity
      };

      boughtItems.push(item);
      toBuyItems.splice(itemIndex,1);

    }

    service.getToBuyItems = function() {
      return toBuyItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }



  }









})();
