app.controller('loginCtrl', function($scope, $http, $rootScope, $location){
$scope.isError = false;
$scope.login = function(){
    $http.get(`http://localhost:3000/users?email=${$scope.email}&password=${$scope.password}`).then(
        function(res){
            if(res.data.length == 0){// khong dang nhap duoc
                $scope.isError = true;
                
            }
            else{
                $rootScope.user = res.data[0];
            $rootScope.user = res.data[0];
            localStorage.setItem('user', JSON.stringify($rootScope.user));
                $location.path('/');
            }
        },
        function(res){
            $scope.isError = true;
        }
    )
}
})