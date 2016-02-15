export default kibana => {
  return new kibana.Plugin({
    uiExports: {
      hacks: [
        'plugins/kibana-hotkeys/hotkeys'
      ]
    }
  });
};
