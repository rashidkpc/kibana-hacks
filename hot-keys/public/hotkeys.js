import $ from 'jquery';
import _ from 'lodash';

const hotkeys = {
  '8706': '[ng-href$=discover]',  // Alt+d
  '8747': '[ng-href$=dashboard]', // Alt+b
  '231':  '[ng-click="close()"]'  // Alt+c
};

$(window).keypress(e => {
  console.log(e);
  $(hotkeys[String(e.keyCode)]).click();
});
