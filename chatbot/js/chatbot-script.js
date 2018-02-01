(function() {
  var app = angular.module('chatbox', []);

  app.controller('StoreController', ['$http', function ($http) {
      this.createdAt =Date.now();
      var store = this;
        store.products = [];
        $http({
            method:'GET',
            url:'data/data.json'
        }).then(function(response){
            console.log(response,'result successfully loaded');
            store.products = response.data;
        });
  }]);
    
  app.controller("PreviewController", function(){
    this.review = {};
    this.addReview = function(product){
      product.messages.push(this.review);
      this.review = {};
    };
  });

})();
