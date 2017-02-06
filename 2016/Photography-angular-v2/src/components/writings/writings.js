/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './writings.html';

class writingsController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '随笔漫谈', active: true, link: 'writings'}];
    this.http = $http;
    this.sce = $sce;

    this.totalCount = '';
    this.pageCount = 5;
    this.page = {
        pageIndex: 1,
        pageSize: 10,
        name: ''
    };
    this.writeList = [];
    this.loads();
  }
 
  loads () {
      this.http.get('static/data/write.json').then((res) => {
          this.writeList = res.data.data;
      });
  } 

}
writingsController.$inject = ['$http', '$sce', '$scope'];

let writingsComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: writingsController,
  controllerAs: 'vm',
  bindToController: true
};

let writingsModule = angular.module('writings', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('writings', {
      url: '/writings',
      template: `
        <writings></writings>`
    });
})
.component('writings', writingsComponent);

export default writingsModule;
