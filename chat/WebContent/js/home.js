var chat=angular.module('chat',['ngRoute']);
chat.config(function($routeProvider)
{
$routeProvider.when('/register',
{
templateUrl:'partials/register.html',
controller:'registerController'
}).when('/login',
{
templateUrl : 'partials/login.html',
controller : 'loginController'
});
});
chat.controller('registerController',function($scope)
{
console.log("iam register controller");
$scope.register=function()
{
console.log("in register function");
console.log("username:"+$scope.username);
console.log("password:"+$scope.password);
console.log("Firstname:"+$scope.firstname);
console.log("Lastname:"+$scope.lastname);
console.log("dob"+$scope.dob);


}
scope.username="";
scope.password="";
scope.firstname="";
scope.lastname="";
scope.dob="";

});

