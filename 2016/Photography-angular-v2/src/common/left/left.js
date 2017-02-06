/**
 * Created by v_lianwang on 2016/5/1.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './left.html';

class LeftController {
  constructor() {
  }
}


let navbarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller: LeftController,
    controllerAs: 'vm',
    bindToController: true
  };
};


let leftModule = angular.module('left', [uiRouter]).directive('left', navbarComponent);

export default leftModule;
