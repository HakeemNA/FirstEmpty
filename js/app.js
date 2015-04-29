(function(){
  "use strict";

  var testModule = angular.module("testApp", []);

  testModule.controller("homeController", function(){
    var order = this;
    order.orderCount = 0;

    order.submitOrder = function() {
      order.orderCount--;

    };
  });
})();