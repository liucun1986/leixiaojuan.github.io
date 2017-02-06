/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './workdetail.html';

class workdetailController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '作品分享', active: true, link: 'workdetail'}];
    this.http = $http;
    this.sce = $sce;
   // 精选作品
    this.workList = [];
    // 单个作品----------这里展示3条数据
    this.work = {};
    // 条件id
    this.id = 1;
    // 加载banner数据
    this.loads();
  }

 loads () {
    this.http.get('static/data/works.json', { params: this.id }).then((res) => {
        this.work = res.data.data[0];
        this.workList = res.data.data;
    })
  }

}
workdetailController.$inject = ['$http', '$sce', '$scope'];

let workdetailComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: workdetailController,
  controllerAs: 'vm',
  bindToController: true
};

let workdetailModule = angular.module('workdetail', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('workdetail', {
      url: '/workdetail',
      template: `
        <workdetail></workdetail>`
    });
})
.component('workdetail', workdetailComponent);

export default workdetailModule;
