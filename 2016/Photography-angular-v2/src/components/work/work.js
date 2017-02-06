/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './work.html';

class workController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '作品分享', active: true, link: 'work'}];
    this.http = $http;
    this.sce = $sce;

    this.totalCount = '';
    this.tableList = '';
    this.pageCount = 5;
    this.page = {
        pageIndex: 1,
        pageSize: 10,
        name: ''
    };
    //列表数据
    this.workList = [];
    // 类型数据
    this.typeList = [];
    // 加载banner数据
    this.loads();
  }

  // 获取banner数据
  loads () {
    this.http.get('static/data/works.json', { params: this.page }).then((res)=> {
        this.workList = res.data.data;
        this.typeList = res.data.type;
    })
  } 

}
workController.$inject = ['$http', '$sce', '$scope'];

let workComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: workController,
  controllerAs: 'vm',
  bindToController: true
};

let workModule = angular.module('work', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('work', {
      url: '/work',
      template: `
        <work></work>`
    });
})
.component('work', workComponent);

export default workModule;
