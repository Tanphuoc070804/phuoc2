app.controller('newsCtrl', function($scope, $routeParams, $http, $rootScope){
   $scope.tintuc = {};
   $http.get(`http://localhost:3000/news/${$routeParams.id}`).then(
      function(res){
         $scope.tintuc = res.data;

         $scope.tintuc.views++;
         $http.patch(`http://localhost:3000/news/${$routeParams.id}`, 
         {
            views: $scope.tintuc.views
         })
      },
      function(res){
         alert('co loi khi lay du lieu');
      }
   );
   $scope.Date = function(ngay){
      return new Date(ngay);
   };
   $scope.react = function(type){
      $scope.tintuc[type]++;
      $http.patch(`http://localhost:3000/news/${$routeParams.id}`, {
         [type]: $scope.tintuc[type]
      })
   }  
   $scope.comment = function(){
      $http.post('http://localhost:3000/comments', {
         idNews: $routeParams.id,
         idUser: $rootScope.user.id,
         name: $rootScope.user.name,
         content: $scope.content,
         date: new Date().toLocaleString('sv-SE'),//yyy-mm-dd HH:mm:ss
      }).then(
         function(res){
            $scope.content = '';
            // cap nhat lai danh sach binh luan
            $scope.loadComment();
         }
      )
   }
   
   $scope.loadComment = function(){
      $http.get(`http://localhost:3000/comments?idNews=${$routeParams.id}`).then(
         function(res){
            $scope.dsBL = res.data;

         }
      )
   }
   $scope.loadComment();
   $scope.limit = 5;
   $scope.deleteComment = function(id){
      $http.delete(`http://localhost:3000/comments/${id}`).then(
         function(res){
            $scope.loadComment();
         }
      )
   }
})