/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './about.html';

class aboutController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '关于我', active: true, link: 'about'}];
    this.http = $http;
    this.sce = $sce;
    
    // 列表
    this.about = {
      title: '',
      content: ''
    };    
    this.getAbout();
  }

  getAbout () {
    // 需要3条数据
    this.http.get('static/data/aboutMe.json').then((res)=> {
        this.about.title =   res.data.data.title;
        this.about.content =  this.sce.trustAsHtml(res.data.data.content);
    })
  }

}
aboutController.$inject = ['$http', '$sce', '$scope'];

let aboutComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: aboutController,
  controllerAs: 'vm',
  bindToController: true
};

let aboutModule = angular.module('about', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('about', {
      url: '/about',
      template: `
        <about></about>`
    });
})
.component('about', aboutComponent);

export default aboutModule;
