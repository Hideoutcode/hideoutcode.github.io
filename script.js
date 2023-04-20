(function() {
  var app = angular.module('chatApp', []);

  app.controller('MessageCtrl', function($scope) {
    $scope.messages = [{
    
      Message: "for a list of commands and creators type 'urmom'"
    }, {
      ,
      Message: "BakeryAI"
    }, {
   
      Message: "Welcome user to the new AI inerface, you may continue  by entering hello into your message."
    }];
  });

})();
