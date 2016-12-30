/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './message.html';

class messageController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '留言板', active: true, link: 'message'}];
    this.http = $http;
    this.sce = $sce;     
  } 

}
messageController.$inject = ['$http', '$sce', '$scope'];

let messageComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: messageController,
  controllerAs: 'vm',
  bindToController: true
};

let messageModule = angular.module('message', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('message', {
      url: '/message',
      template: `
        <message></message>`
    });
})
.component('message', messageComponent);

export default messageModule;
