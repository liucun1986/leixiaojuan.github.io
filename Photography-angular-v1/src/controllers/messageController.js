
var app = require('../app.js')

app.controller('MessageIndex', ['$scope', function ($scope) {
	$scope.tabs = [{name: '留言板', active: true, link: 'message'}];
}]);