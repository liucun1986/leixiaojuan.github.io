/**
 * Created by v_lianwang on 2016/5/1.
 */

import angular from 'angular';
import Navbar from './navbar/navbar'
import Foot from './foot/foot'
import Left from './left/left'
import RightHead from './rightHead/rightHead'
import Page from './page/page'
import RightRecent from './rightRecent/rightRecent'

export default angular.module('app.common', [
  Navbar.name,
  Foot.name,
  Left.name,
  RightHead.name,
  Page.name,
  RightRecent.name
]);
