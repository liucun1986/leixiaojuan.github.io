/**
 * Created by v_lianwang on 2016/5/2.
 */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import template from './rightRecent.html'
import './rightRecent.css'

class rightRecentController {
  constructor($http, $sce, $scope) {
    this.http = $http;
    this.sce = $sce;

    this.workList = [];
    this.drawList = [];
    this.writeList = [];
    this.wisdom = '';
    this.getWorkList(); 
    this.getDrawList();
    this.getWriteList();
    this.getWisdom();
  }
  // 作品分享
  getWorkList () {
    // 显示最新三条数据
    this.http.get('static/data/works.json').then((res)=> {
      this.workList = res.data.data;
    })
  }

  // 摄影绘画
   getDrawList () {
    // 显示最新三条数据
    this.http.get('static/data/draw.json').then((res)=> {
      this.drawList = res.data.type;
    })
  }

  // 最新随笔漫谈
   getWriteList () {
    // 显示最新10条数据
    this.http.get('static/data/write.json').then((res)=> {
      this.writeList = res.data.data;
    })
  }

   // 每日一句
  getWisdom () {
    // 显示最新10条数据
    this.http.get('static/data/wisdom.json').then((res)=> {
      this.wisdom = res.data.data[0];
    })
  }
}

let rightRecentComponent = function () {
  return {
    restrict: 'E',
    scope: {
      tabs:'='
    },
    template,
    controller: rightRecentController,
    controllerAs: 'vm',
    bindToController: true
  };
};

let rightRecentModule = angular.module('rightRecent', [uiRouter]).directive('rightRecent', rightRecentComponent);

export default rightRecentModule;