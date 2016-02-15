import _ from 'lodash';
import $ from 'jquery';
import 'plugins/metric-thresholds/less/main.less';

var regex = new RegExp(/(#[0-9A-Fa-f]{6})([<>])(\d+)/);
var noCapture = new RegExp(/(#[0-9A-Fa-f]{6}(?:>|<|&gt;|&lt;)\d+)/);

$(document).ready(function () {
  setInterval(() => {
    const titles = $('.metric-value').filter((i, elem) => {
      return $(elem).next().text().match(noCapture);
    });

    _.each(titles, elem => {
      const titleContainer = $(elem).next();
      const matches = titleContainer.text().match(regex);


      if (!$('span.metric-threshold', titleContainer).length) {
        $(titleContainer).html(function (_, html) {
          return html.replace(noCapture, '<span class="metric-threshold">$1</span>');
        });
      }

      const color = matches[1];
      const gtlt = matches[2];
      const threshold = Number(matches[3]);

      const valueContainer = $(elem);
      const value = Number(valueContainer.text().match(/[\d.]+/g).join(''));

      if ((gtlt === '>' && value > threshold) || (gtlt === '<' && value < threshold)) {
        $(elem).css({'background-color': color, padding: '10px'});
      } else {
        $(elem).css('background-color', 'inherit');
      }
    });
  }, 1000);
});
