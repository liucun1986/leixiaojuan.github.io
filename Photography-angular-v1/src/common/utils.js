var config = require('../config');

module.exports = {
    ctrTest: function controllerTest(queue, ctr) {
        var arr = [];
        for (var i = 0; i < queue.length; i++) {
            if (queue[i][0] == '$controllerProvider') {
                arr.push(queue[i])
            }
        }
        for (var n = 0; n < arr.length; n++) {
            if (arr[n][2][0] == ctr) {
                return true
            }
        }
        return false;
    }
};
