import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from '/data2/dev/fenglijun/SKMS/node_modules/_dva-loading@3.0.20@dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';

let app:any = null;

function _onCreate() {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'basic', ...(require('/data2/dev/fenglijun/SKMS/src/models/basic.js').default) });
app.model({ namespace: 'global', ...(require('/data2/dev/fenglijun/SKMS/src/models/global.js').default) });
app.model({ namespace: 'login', ...(require('/data2/dev/fenglijun/SKMS/src/models/login.js').default) });
app.model({ namespace: 'setting', ...(require('/data2/dev/fenglijun/SKMS/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/data2/dev/fenglijun/SKMS/src/models/user.js').default) });
app.model({ namespace: 'model', ...(require('/data2/dev/fenglijun/SKMS/src/pages/basic/knowledge/components/model.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    _onCreate();
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
