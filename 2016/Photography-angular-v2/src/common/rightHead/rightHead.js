/**
 * Created by v_lianwang on 2016/5/2.
 */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import template from './rightHead.html'
import './rightHead.css'

class RightHeadController {
  constructor() {
  }
}

let rightHeadComponent = function () {
  return {
    restrict: 'E',
    scope: {
      tabs:'='
    },
    template,
    controller: RightHeadController,
    controllerAs: 'vm',
    bindToController: true
  };
};

let navbarModule = angular.module('rightHead', [uiRouter]).directive('rightHead', rightHeadComponent);

export default navbarModule;