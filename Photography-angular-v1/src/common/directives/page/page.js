/**
 * Created by v_lianwang on 2016/5/22.
 */
var app = require('../../../app');

require('./page.css')

app.directive('page', function () {
    return {
        restrict: 'E',
        scope: {
            pageIndex: '=',
            pageCount: '=',
            pageSize: '=',
            totalCount: '='
        },
        templateUrl: "views/common/page.html",
        controller: function ($scope) {
            $scope.totalPace = '';

            $scope.pageBtn = function () {
                var arr = [];
                $scope.totalPace = Math.ceil($scope.totalCount / $scope.pageSize);
                if ($scope.totalPace <= $scope.pageCount) {
                    if ($scope.totalCount === 0) {
                        arr = [1];
                    } else {
                        for (var i = 0; i < $scope.totalPace; i++) {
                            arr[i] = i + 1;
                        }
                    }
                } else {
                    if ($scope.pageIndex < (this.pageCount - Math.floor($scope.pageCount / 2))) {
                        for (var s = 0; s < this.pageCount; s++) {
                            arr[s] = s + 1;
                        }
                    } else {
                        if ($scope.pageIndex > ($scope.totalPace - Math.ceil($scope.pageCount / 2))) {
                            for (var n = 0; n < $scope.pageCount; n++) {
                                arr[n] = $scope.totalPace - $scope.pageCount + 1 + n;
                            }
                        } else {
                            for (var m = 0; m < $scope.pageCount; m++) {
                                arr[m] = $scope.pageIndex - Math.floor($scope.pageCount / 2) + m;
                            }
                        }
                    }
                }
                return arr;
            }

            $scope.getPageList = function (num) {
                $scope.totalPace = Math.ceil($scope.totalCount / $scope.pageSize);
                if ($scope.pageIndex === num || num < 1 || num > $scope.totalPace) {

                } else {
                    $scope.pageIndex = num;
                    $scope.$emit('change', $scope.pageIndex);
                    $scope.pageList = $scope.pageBtn();
                }

            }

            $scope.sizeChange = function () {
                if ($scope.pageSize == 0) {
                    $scope.pageSize = 1;
                    $scope.$emit('change', $scope.pageIndex, $scope.pageSize);
                    $scope.pageList = this.pageBtn();
                } else {
                    $scope.pageIndex = 1;
                    $scope.$emit('change', $scope.pageIndex, $scope.pageSize);
                    $scope.pageList = $scope.pageBtn();
                }
            }

            $scope.pageList = $scope.pageBtn();
            $scope.$watch('vm.totalCount', function () {
                $scope.pageList = $scope.pageBtn();
            })
        }
    };
});

