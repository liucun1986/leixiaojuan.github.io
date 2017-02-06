
var app = require('../app.js')

app.controller('HomeIndex', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
	$scope.tabs = [{name: '首页', active: true, link: 'home'}];

	/*--------------------------- banner模块 --------------------------------*/
	// banner
    $scope.banner = {
    	"title": '',
    	"content": ''
    };
    // 随笔漫谈
    $scope.wisdomList = [];

    // 获取banner数据
	$scope.loads = function () {
		$http.get('/assets/data/home.json').then(function (res) {
            $scope.banner.title = res.data.banner.title;
            $scope.banner.content = $sce.trustAsHtml(res.data.banner.content);
        });
	};
	$scope.loads();

    // 名人名言
    $scope.getWisdomList = function () {
        // 显示最新3条数据
        $http.get('/assets/data/wisdom.json').then(function (res) {
            $scope.wisdomList = res.data.data;
        });
    };
    $scope.getWisdomList();


    /*--------------------------- 作品分享 --------------------------------*/
    $scope.workList = [];
    // 获取类型数据
    $scope.getWorkList = function () {
        // 需要6条数据
        $http.get('/assets/data/works.json').then(function (res) {
            $scope.workList = res.data.data;
        });
    };
    $scope.getWorkList();

    /*--------------------------- 摄影绘画 --------------------------------*/
    $scope.drawList = [];
    // 获取类型数据
    $scope.getDrawList = function () {
        // 需要3条数据
        $http.get('/assets/data/draw.json').then(function (res) {
            $scope.drawList = res.data.data;
        });
    };
    $scope.getDrawList();

	/*--------------------------- 随笔漫谈 --------------------------------*/
    // 随笔漫谈
    $scope.writeList = [];
	$scope.getWrite = function () {
        // 需要3条数据
		$http.get('/assets/data/write.json').then(function (res) {
            $scope.writeList = res.data.data;
        });
	};
	$scope.getWrite();

    /*--------------------------- 类型 --------------------------------*/
    $scope.typeList = [];
    // 获取类型数据
    $scope.getType = function () {
        // 需要6条数据
        $http.get('/assets/data/homeType.json').then(function (res) {
            $scope.typeList = res.data.data;
        });
    };
    // 加载类型数据
    $scope.getType();
}]);