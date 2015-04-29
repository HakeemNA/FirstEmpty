(function(){
  "use strict";

  var testModule = angular.module("testApp", []);

  testModule.controller("homeController", function(){
    var order = this;
    order.orderCount = 0;

    order.submitOrder = function() {
      order.orderCount--;
      order.orderCount = 1;
      // just a comment
    };
  });
})();