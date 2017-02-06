
var app = require('../../../app');

require('./rightRecent.css')

app.directive('rightRecent', function () {
    return {
        restrict: 'E',
        scope: {
            tabs: '='
        },
        templateUrl:"views/common/rightRecent.html" ,
        controller: function ($scope, $http) {
        	$scope.workList = [];
        	$scope.drawList = [];

        	// 作品分享
        	$scope.loads = function () {
        		// 显示最新三条数据
				$http.get('/assets/data/works.json').then(function (res) {
		            $scope.workList = res.data.data;
		        });
			};
			$scope.loads();	

			// 摄影绘画
        	$scope.getDrawList = function () {
        		// 显示最新三条数据
				$http.get('/assets/data/draw.json').then(function (res) {
		            $scope.drawList = res.data.type;
		        });
			};
			$scope.getDrawList();

			// 最新随笔漫谈
        	$scope.getWriteList = function () {
        		// 显示最新10条数据
				$http.get('/assets/data/write.json').then(function (res) {
		            $scope.writeList = res.data.data;
		        });
			};
			$scope.getWriteList();

			// 每日一句
        	$scope.getWisdom = function () {
        		// 显示最新10条数据
				$http.get('/assets/data/wisdom.json').then(function (res) {
		            $scope.wisdom = res.data.data[0];
		        });
			};
			$scope.getWisdom();
			
        }
    };
});

