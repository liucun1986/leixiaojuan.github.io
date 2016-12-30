
var app = require('../app.js')

app.controller('PhotopaintDetailIndex', ['$scope', function ($scope) {
	$scope.tabs = [{name: '绘画摄影详情页面', active: true, link: 'photopaint'}];
}]);