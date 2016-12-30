/**
 * Created by v_lianwang on 2016/5/22.
 */

var config = require('./config');
require('./app.js');

function requireAll(req) {
    req.keys().forEach(function (key) {
        req(key);
    });
}

requireAll(require.context('./common', true, /\.js$/ig));
requireAll(require.context('./controllers', true, /\.js$/ig));

module.exports = {};