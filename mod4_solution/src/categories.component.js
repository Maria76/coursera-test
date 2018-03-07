(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'html/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
