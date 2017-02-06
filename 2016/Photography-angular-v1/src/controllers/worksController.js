
var app = require('../app.js')

app.controller('WorksIndex', ['$scope', '$http', function ($scope, $http) {
	$scope.tabs = [{name: '作品分享', active: true, link: 'works'}];

    $scope.totalCount = '';
    $scope.tableList = '';
    $scope.pageCount = 5;
    $scope.page = {
        pageIndex: 1,
        pageSize: 10,
        name: ''
    };
	//列表数据
	$scope.workList = [];
	// 类型数据
	$scope.typeList = [];
    // 获取banner数据
	$scope.loads = function () {
		$http.get('/assets/data/works.json', { params: $scope.page }).then(function (res) {
            $scope.workList = res.data.data;
            $scope.typeList = res.data.type;
        });
	};
    // 加载banner数据
	$scope.loads();

}]);