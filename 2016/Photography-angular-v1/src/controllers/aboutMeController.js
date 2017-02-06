
var app = require('../app.js')

app.controller('AboutMeIndex', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
	$scope.tabs = [{name: '关于我', active: true, link: 'aboutMe'}];
    // 列表
    $scope.about = {
    	"title": '',
    	"content": ''
    };
	$scope.getAbout = function () {
        // 需要3条数据
		$http.get('/assets/data/aboutMe.json').then(function (res) {
            $scope.about.title =   res.data.data.title;
            $scope.about.content =  $sce.trustAsHtml(res.data.data.content);
        });
	};
	$scope.getAbout();

}]);