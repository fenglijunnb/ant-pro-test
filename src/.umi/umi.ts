import './core/polyfill';
import '@@/core/devScripts';
import '../global.jsx';
import { plugin } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/data2/dev/fenglijun/SKMS/node_modules/_@umijs_runtime@3.1.1@@umijs/runtime';
import { renderClient } from '/data2/dev/fenglijun/SKMS/node_modules/_@umijs_renderer-react@3.1.1@@umijs/renderer-react/dist/index.js';


require('../global.less');
require('./plugin-locale/locale')._onCreate();

(() => {
  // Runtime block add component
  window.GUmiUIFlag = require('/data2/dev/fenglijun/SKMS/node_modules/_@umijs_plugin-ui-blocks@2.1.8@@umijs/plugin-ui-blocks/lib/sdk/flagBabelPlugin/GUmiUIFlag.js').default;

  // Enable/Disable block add edit mode
  window.addEventListener('message', (event) => {
    try {
      const { action, data } = JSON.parse(event.data);
      switch (action) {
        case 'umi.ui.checkValidEditSection':
          const haveValid = !!document.querySelectorAll('div.g_umiuiBlockAddEditMode').length;
          const frame = document.getElementById('umi-ui-bubble');
          if (frame && frame.contentWindow) {
            frame.contentWindow.postMessage(
              JSON.stringify({
                action: 'umi.ui.checkValidEditSection.success',
                payload: {
                  haveValid,
                },
              }),
              '*',
            );
          }
        default:
          break;
      }
    } catch(e) {
    }
  }, false);
})();
  

const getClientRender = (args: { hot?: boolean } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    return renderClient({
      // @ts-ignore
      routes: require('./core/routes').routes,
      plugin,
      history: createHistory(args.hot),
      rootElement: 'root',
      defaultTitle: '',
    });
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.1.1',
    };
  

    (() => {
      try {
        const ua = window.navigator.userAgent;
        const isIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
        if (isIE) return;

        // Umi UI Bubble
        require('/data2/dev/fenglijun/SKMS/node_modules/_@umijs_preset-ui@2.1.13@@umijs/preset-ui/lib/bubble').default({
          port: 3000,
          path: '/data2/dev/fenglijun/SKMS',
          currentProject: '',
          isBigfish: undefined,
        });
      } catch (e) {
        console.warn('Umi UI render error:', e);
      }
    })();
  

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    getClientRender({ hot: true })();
  });
}
