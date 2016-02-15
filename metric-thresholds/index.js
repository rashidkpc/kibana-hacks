module.exports = function (kibana) {
  return new kibana.Plugin({
    uiExports: {
      hacks: [
        'plugins/metric-thresholds/color_metrics'
      ]
    },
  });
};
