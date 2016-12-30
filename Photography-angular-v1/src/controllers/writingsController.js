
var app = require('../app.js')

app.controller('WritingsIndex', ['$scope', '$http', function ($scope, $http) {
	$scope.tabs = [{name: '随笔漫谈', active: true, link: 'writings'}];
    // 列表
    $scope.writeList = [];
	$scope.getWrite = function () {
        // 需要3条数据
		$http.get('/assets/data/write.json').then(function (res) {
            $scope.writeList = res.data.data;
        });
	};
	$scope.getWrite();
}]);