
var app = require('../app.js')

app.controller('WorksDetailIndex', ['$scope', "$http", function ($scope, $http) {
	$scope.tabs = [{name: '作品分享详情', active: true, link: 'works'}];

	// 精选作品
	$scope.workList = [];
	// 单个作品----------这里展示3条数据
	$scope.work = {};
	// 条件id
	$scope.id = 1;
    // 获取banner数据
	$scope.loads = function () {
		$http.get('/assets/data/works.json', { params: $scope.id }).then(function (res) {
            $scope.work = res.data.data[0];
            $scope.workList = res.data.data;
        });
	};
    // 加载banner数据
	$scope.loads();
}]);