app.controller('cartCtrl', function($scope, $rootScope, $http, $location){
    $scope.tinhtong = function(){
        let tong = 0;
        if($rootScope.cart){
             $rootScope.cart.forEach(pd =>{
            tong += pd.price * pd.quantity;
        });
        }      
        return tong;
    }
    $scope.saveCart = function(){
        localStorage.setItem('cart', JSON.stringify($rootScope.cart));
    }
    $scope.delete = function (index)
    {
    $rootScope.cart.splice(index, 1);
    $scope.saveCart();
    }
    $scope.deleteAll = function(){
        $rootScope.cart = [];
        $scope.saveCart();
    }
    $scope.checkOut = function(){
        $http.post('http://localhost:3000/orders',{
            name: $scope.name,
            phone: $scope.phone,
            address: $scope.address,
            products: $rootScope.cart,
            idUser: '-1', // chua dang nhap -1, nguoc lai ghi idUser
            total: $scope.tinhtong(),
            date: new Date().toLocaleString('sv-SE'),
            status: 'order',//shipping, success, cancel,...
        }).then(
            function(res){
                $scope.deleteAll();
                document.querySelector('.btn-close').click();
                // nen làm trang thong bao dat hang thanh cong
                alert('Đặt hàng thành công!')
                $location.path('/');
            }
        )
    }
});
