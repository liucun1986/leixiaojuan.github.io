/**
 * Created by v_lianwang on 2016/5/2.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './home.html';

class homeController {
  constructor($http, $sce, $scope) {
    this.tabs = [{name: '首页', active: true, link: 'home'}];
    this.http = $http;
    this.sce = $sce;
    /*--------------------------- banner模块 --------------------------------*/
    // banner
    this.banner = {
      title: '',
      content: ''
    };
    // 随笔漫谈
    this.wisdomList = [];
    /*--------------------------- banner   --------------------------------*/
    this.getBanner();
    /*--------------------------- 名人名言 --------------------------------*/
    this.getWisdomList();
    /*--------------------------- 作品分享 --------------------------------*/
    this.workList = [];
    this.getWorkList();
    /*--------------------------- 摄影绘画 --------------------------------*/
    this.drawList = [];
    this.getDrawList();
    /*--------------------------- 随笔漫谈 --------------------------------*/
    this.writeList = [];
    this.getWrite();
    /*--------------------------- 类型     --------------------------------*/
    this.typeList = [];
    this.getType();
  }
  
  // 获取banner数据
  getBanner () {
    this.http.get('static/data/home.json').then((res)=> {
        this.banner.title = res.data.banner.title;
        this.banner.content = this.sce.trustAsHtml(res.data.banner.content);
    }).catch((res)=> {

    })
  }
  // 名人名言
  getWisdomList () {
    // 显示最新3条数据
    this.http.get('static/data/wisdom.json').then((res)=> {
        this.wisdomList = res.data.data;
    }).catch((res)=> {

    })
  }

  // 获取类型数据
  getWorkList () {
    // 需要6条数据
    this.http.get('static/data/works.json').then((res)=> {
        this.workList = res.data.data;
    }).catch((res)=> {

    })
  }

  // 获取类型数据
  getDrawList () {
    // 需要3条数据
    this.http.get('static/data/draw.json').then((res)=> {
        this.drawList = res.data.data;
    }).catch((res)=> {

    })
  }
  
  // 随笔漫谈
  getWrite () {
    // 需要3条数据
    this.http.get('static/data/write.json').then((res)=> {
        this.writeList = res.data.data;
    }).catch((res)=> {

    })
  }

  // 获取类型数据
  getType () {
    // 需要6条数据
    this.http.get('static/data/homeType.json').then((res)=> {
        this.typeList = res.data.data;
    }).catch((res)=> {

    })
  }

}
homeController.$inject = ['$http', '$sce', '$scope'];

let homeComponent = {
  restrict: 'E',
  scope: {},
  template,
  controller: homeController,
  controllerAs: 'vm',
  bindToController: true
};

let homeModule = angular.module('home', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      template: `
        <home></home>`
    });
})
.component('home', homeComponent);

export default homeModule;
