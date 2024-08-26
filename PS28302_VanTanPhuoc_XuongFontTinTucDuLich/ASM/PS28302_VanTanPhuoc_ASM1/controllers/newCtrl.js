app.controller('newCtrl', function($scope, $routeParams, $http, $rootScope){
   $scope.dsTT = [];
   $scope.dsBL = [];
   $http.get('http://localhost:3000/news').then(
       function(res){// thành công
           $scope.dsTT = res.data;
       },
       function(res){// thất bại

       }
   );
   $scope.modal = {};
   $scope.showTinTuc = function(tt){
       $scope.modal = tt;
   }
   
});