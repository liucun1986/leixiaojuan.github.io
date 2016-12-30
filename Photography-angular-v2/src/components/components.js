import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Work from './work/work';
import Workdetail from './workdetail/workdetail';
import Photopaint from './photopaint/photopaint';
import Photopaintdetail from './photopaintdetail/photopaintdetail';
import Writings from './writings/writings';
import Writingsdetail from './writingsdetail/writingsdetail';
import Message from './message/message';

export default angular.module('app.components', [
  Home.name,
  About.name,
  Work.name,
  Workdetail.name,
  Photopaint.name,
  Photopaintdetail.name,
  Writings.name,
  Writingsdetail.name,
  Message.name
]);
