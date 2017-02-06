
var app = require('../app.js')

app.controller('index', ['$scope', '$route', function ($scope, $route) {
    $scope.$route = $route;
}])
