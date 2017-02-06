/**
 * Created by v_lianwang on 2016/5/22.
 */
var app = require('../app');
var route = require('./route');
var utils = require('./utils');
var config = require('../config');
var httpFilter = require('./httpFilter');

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    //$httpProvider.interceptors.push(['$location', '$q', httpFilter]);

    route($routeProvider);

}]).run(['$rootScope', '$controller', '$location', function ($rootScope, $controller, $location) {
    $rootScope.$on('$routeChangeStart', function (evt, next, current) {
        if (next && next.pathParams && next.pathParams.controller && next.pathParams.action) {
            var controller = next.pathParams.controller + next.pathParams.action
            var template = 'views/' + next.pathParams.controller + '/' + next.pathParams.action + '.html'
            /*
             * 注意路由的大小写 and  controller 的命名
             * */

            if (!utils.ctrTest(app._invokeQueue, controller)) {
                $location.path('/deny')
            } else {
                next.controller = controller

                next.templateUrl = template

                next.active = next.pathParams.controller
            }

        }
    });
}]);
