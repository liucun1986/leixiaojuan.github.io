/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './photopaint.html';

class photopaintController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '绘画摄影', active: true, link: 'photopaint'}];
    this.http = $http;
    this.sce = $sce;

    this.totalCount = '';
    this.pageCount = 5;
    this.page = {
        pageIndex: 1,
        pageSize: 10,
        name: ''
    };
    this.drawList = [];
    this.loads();
  }

  // 获取banner数据
  loads () {
    this.http.get('static/data/draw.json', { params: this.page }).then((res) => {
        this.drawList = res.data.data;
    })
  } 

}
photopaintController.$inject = ['$http', '$sce', '$scope'];

let photopaintComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: photopaintController,
  controllerAs: 'vm',
  bindToController: true
};

let photopaintModule = angular.module('photopaint', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('photopaint', {
      url: '/photopaint',
      template: `
        <photopaint></photopaint>`
    });
})
.component('photopaint', photopaintComponent);

export default photopaintModule;
