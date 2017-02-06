/**
 * Created by v_lianwang on 2016/5/1.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './navbar.html';


class NavbarController {
  constructor() {
    // hrc.common.hrcHeader({
    //   username: "kindywu",
    //   logoutUrl: "_logut"
    // });
  }
}


let navbarComponent = function () {
  return {
    restrict: 'E',
    scope: { },
    template,
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };
};


let navbarModule = angular.module('navbar', [uiRouter]).directive('navbar', navbarComponent);

export default navbarModule;
