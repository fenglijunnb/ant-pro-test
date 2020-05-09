import { Plugin } from '/data2/dev/fenglijun/SKMS/node_modules/_@umijs_runtime@3.1.1@@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/data2/dev/fenglijun/SKMS/node_modules/_umi-plugin-antd-icon-config@2.0.3@umi-plugin-antd-icon-config/lib/app.js'),
  path: '/data2/dev/fenglijun/SKMS/node_modules/_umi-plugin-antd-icon-config@2.0.3@umi-plugin-antd-icon-config/lib/app.js',
});
plugin.register({
  apply: require('/data2/dev/fenglijun/SKMS/src/.umi/plugin-dva/runtime.tsx'),
  path: '/data2/dev/fenglijun/SKMS/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('/data2/dev/fenglijun/SKMS/src/.umi/plugin-locale/runtime.tsx'),
  path: '/data2/dev/fenglijun/SKMS/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
