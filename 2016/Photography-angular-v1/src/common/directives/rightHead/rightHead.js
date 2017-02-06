/**
 * Created by v_lianwang on 2016/5/22.
 */
var app = require('../../../app');

require('./rightHead.css')

app.directive('rightHead', function () {
    return {
        restrict: 'E',
        scope: {
            tabs: '='
        },
        templateUrl:"views/common/rightHead.html" ,
        controller: function () {

        }
    };
});

