/**
 * Created by v_lianwang on 2016/5/1.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from  './foot.html';

class FootController {
  constructor() {
  }
}

let footComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller: FootController,
    controllerAs: 'vm',
    bindToController: true
  };
};

let footModule = angular.module('foot', [uiRouter]).directive('foot', footComponent);
export default footModule;

