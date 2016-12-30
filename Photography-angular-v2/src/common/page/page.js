/**
 * Created by v_lianwang on 2016/5/2.
 */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import template from './page.html'
import './page.css'

class PageController {
  constructor($scope) {
    this.totalPace='';
    this.pageList = this.pageBtn();
    this.$scope=$scope;
    this.$scope.$watch('vm.totalCount',(...val)=>{
      this.pageList = this.pageBtn();
    });
  }

  pageBtn() {
    var arr = [];
    this.totalPace = Math.ceil(this.totalCount / this.pageSize);
    if (this.totalPace <= this.pageCount) {
      if (this.totalCount === 0) {
        arr = [1];
      } else {
        for (let i = 0; i < this.totalPace; i++) {
          arr[i] = i + 1;
        }
      }
    } else {
      if (this.pageIndex < (this.pageCount - Math.floor(this.pageCount / 2))) {
        for (let i = 0; i < this.pageCount; i++) {
          arr[i] = i + 1;
        }
      } else {
        if (this.pageIndex > (this.totalPace - Math.ceil(this.pageCount / 2))) {
          for (let i = 0; i < this.pageCount; i++) {
            arr[i] = this.totalPace - this.pageCount + 1 + i;
          }
        } else {
          for (let i = 0; i < this.pageCount; i++) {
            arr[i] = this.pageIndex - Math.floor(this.pageCount / 2) + i;
          }
        }
      }
    }
    return arr;
  }

  getPageList(num) {
    this.totalPace = Math.ceil(this.totalCount / this.pageSize);
    if (this.pageIndex === num || num < 1 || num > this.totalPace) {

    } else {
      this.pageIndex = num;
      this.$scope.$emit('change',this.pageIndex);
      this.pageList = this.pageBtn();
    }

  }

  sizeChange() {
    if (this.pageSize == 0) {
      this.pageSize = 1;
      this.$scope.$emit('change',this.pageIndex,this.pageSize);
      this.pageList = this.pageBtn();
    } else {
      this.pageIndex = 1;
      this.$scope.$emit('change',this.pageIndex,this.pageSize);
      this.pageList = this.pageBtn();
    }
  }
}
PageController.$inject=['$scope'];

let pageComponent = function () {
  return {
    restrict: 'E',
    scope: {
      pageIndex: '=',
      pageCount: '=',
      pageSize: '=',
      totalCount: '='
    },
    template,
    controller: PageController,
    controllerAs: 'vm',
    bindToController: true
  };
};

let pageModule = angular.module('page', [uiRouter]).directive('page', pageComponent);

export default pageModule;