/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './writingsdetail.html';

class writingsdetailController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '随笔漫谈', active: true, link: 'writings'}];
    this.http = $http;
    this.sce = $sce; 
    this.write = '';
    this.loads();
  } 
  loads () {
      this.http.get('static/data/write.json').then((res) => {
          this.write = res.data.data[0];
      });
  } 
}
writingsdetailController.$inject = ['$http', '$sce', '$scope'];

let writingsdetailComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: writingsdetailController,
  controllerAs: 'vm',
  bindToController: true
};

let writingsdetailModule = angular.module('writingsdetail', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('writingsdetail', {
      url: '/writingsdetail',
      template: `
        <writingsdetail></writingsdetail>`
    });
})
.component('writingsdetail', writingsdetailComponent);

export default writingsdetailModule;
