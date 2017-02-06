/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './photopaintdetail.html';

class photopaintdetailController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '绘画摄影', active: true, link: 'work'}];
    this.http = $http;
    this.sce = $sce; 
  } 
}
photopaintdetailController.$inject = ['$http', '$sce', '$scope'];

let photopaintdetailComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: photopaintdetailController,
  controllerAs: 'vm',
  bindToController: true
};

let photopaintdetailModule = angular.module('photopaintdetail', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('photopaintdetail', {
      url: '/photopaintdetail',
      template: `
        <photopaintdetail></photopaintdetail>`
    });
})
.component('photopaintdetail', photopaintdetailComponent);

export default photopaintdetailModule;
