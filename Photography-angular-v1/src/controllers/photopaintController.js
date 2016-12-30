
var app = require('../app.js')

app.controller('PhotopaintIndex', ['$scope', '$http', function ($scope, $http) {
	$scope.tabs = [{name: '绘画摄影', active: true, link: 'photopaint'}];

    $scope.totalCount = '';
    $scope.pageCount = 5;
    $scope.page = {
        pageIndex: 1,
        pageSize: 10,
        name: ''
    };
	$scope.drawList = [];
    // 获取banner数据
	$scope.loads = function () {
		$http.get('/assets/data/draw.json', { params: $scope.page }).then(function (res) {
            $scope.drawList = res.data.data;
        });
	};
    // 加载banner数据
	$scope.loads();
}]);