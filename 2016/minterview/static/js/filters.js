/**
 * 全局过滤器
 *
 * Created by v_zjliu on 2016/10/4.
 *
 * */

'use strict';

//日期类型的过滤器
// var datetime_filter={
//     read:function(val){
//         if(typeof val === 'string' || typeof val === 'number') {
//             val = new Date(val);
//         }
//         if(utiltools.isValidDate(val)){
//             //TODO 日期格式化封装成公共函数
//             var date = utiltools.parseDateTime(val);
//             return date.yyyy+"/"+date.mm+"/"+date.dd;
//         }
//         return "";
//     },
//     write:function(newValue){
//         if(utiltools.isValidDate(newValue)){
//             return newValue;
//         }

//         if(typeof newValue === 'string' || typeof newValue === 'number') {
//             var date = new Date(newValue);
//             if(utiltools.isValidDate(date)){
//                 return date;
//             }
//         }

//         return null;
//     }
// };

//非负整数
var int_filter ={
    //写过滤
    write:function (newValue) {
        var num = parseInt(newValue);
        if(isNaN(num) || num<0){
            num=0;
        }
        return num;
    }
};

//非负数字
var number_filter ={
    //写过滤
    write:function (newValue) {
        var num = parseFloat(newValue);
        if(isNaN(num) || num<0){
            num=0;
        }
        return num;
    }
};

//百分比数字
var percent_filter ={
    //写过滤
    write:function (newValue) {
        var num = parseFloat(newValue);
        if(isNaN(num) || num<0){
            num=0;
        }else if(num>100){
            num=100;
        }
        return num;
    }
};

// 金额
var money_filter={
    // read:function(val){
    //     var num = parseFloat(val);
    //     if(isNaN(num) || num<0){
    //         num=0;
    //     }else if(num>Number.MAX_VALUE){
    //         num=Number.MAX_VALUE;
    //     }
    //     return num.toFixed(2);
    // },
    //写过滤
    write:function (newValue) {

        if(typeof newValue === 'string'){
            if(newValue.length==0){
                return newValue;
            }
        }

        var num = parseFloat(newValue);
        if(isNaN(num) || num<0){
            num=0;
        }else if(num>Number.MAX_VALUE){
            num=Number.MAX_VALUE;
        }
        num = parseFloat(num.toFixed(2));
        return num;
    }
};

function install(Vue) {

    Vue.filter('int',int_filter);
    Vue.filter('number',number_filter);
    Vue.filter('percent',percent_filter);
    Vue.filter('money',money_filter);
    // Vue.filter('datetime',datetime_filter);
}

module.exports = install;
