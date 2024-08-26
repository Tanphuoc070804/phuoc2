app.controller('homeCtrl', function($scope, $http, $rootScope){
    $scope.dsTT = [];
    $http.get('http://localhost:3000/news').then(
        function(res){// thành công
            $scope.dsTT = res.data;
        },
        function(res){// thất bại

        }
    );
    $scope.dsPD = [];
    $http.get('http://localhost:3000/productss').then(
        function(res){// thành công
            $scope.dsPD = res.data;
        },
        function(res){// thất bại

        }
    );
   
     // gio hang
     $scope.addToCart = function (pd){
         let inCart = false;
         // da co trogn cart -> tang so luong
         $rootScope.cart.forEach(product => {
             if(product.id == pd.id){
                 inCart = true;
                 product.quantity++;
             }
         });
         if(!inCart){// chua co trong cart -> them vao cart
             pd.quantity = 1;
             $rootScope.cart.push(pd);
         }
         localStorage.setItem('cart', JSON.stringify($rootScope.cart));
         
     }
});