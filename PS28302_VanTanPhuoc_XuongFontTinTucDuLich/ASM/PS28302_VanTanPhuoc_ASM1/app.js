var app = angular.module("myapp", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'views/home.html',
        controller: 'homeCtrl',
    })
    .when('/news/:id',{
        templateUrl:'views/news.html',
        controller: 'newsCtrl',
    })
    .when('/new',{
        templateUrl:'views/new.html',
        controller: 'newCtrl',
    })
    .when('/cart',{
        templateUrl:'views/cart.html',
        controller: 'cartCtrl',
    })
    .when('/login',{
        templateUrl:'views/login.html',
        controller: 'loginCtrl',
    })
    .when('/register',{
        templateUrl:'views/register.html',
        controller: 'registerCtrl',
    })
    .when('/forgot',{
        templateUrl:'views/forgot.html',
        controller: 'forgotCtrl',
    }) 
    .when('/change',{
        templateUrl:'views/change.html',
        controller: 'changeCtrl',
    })
    .when('/update',{
        templateUrl:'views/update.html',
        controller: 'updateCtrl',
    })
    .when('/contact',{
        templateUrl:'views/contact.html',
        controller: 'contactCtrl',
    })
    .when('/alluser',{
        templateUrl:'views/alluser.html',
        controller: 'alluserCtrl',
    })
    .when('/admin',{
        templateUrl:'views/admin.html',
        controller: 'adminCtrl',
    })
})