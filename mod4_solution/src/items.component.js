(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'html/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
