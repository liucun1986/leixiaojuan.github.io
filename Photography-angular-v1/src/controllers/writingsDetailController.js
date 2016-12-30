
var app = require('../app.js')

app.controller('WritingsDetailIndex', ['$scope', '$http', function ($scope, $http) {
	$scope.tabs = [{name: '随笔漫谈', active: true, link: 'writings'}];
    // 列表
    $scope.write = [];
	$scope.getWrite = function () {
        // 需要3条数据
		$http.get('/assets/data/write.json').then(function (res) {
            $scope.write = res.data.data[0];
        });
	};
	$scope.getWrite();

}]);