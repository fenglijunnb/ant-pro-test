import { ApplyPluginsType, dynamic } from '/data2/dev/fenglijun/SKMS/node_modules/_@umijs_runtime@3.1.1@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/data2/dev/fenglijun/SKMS/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "name": "login",
        "path": "/user/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'/data2/dev/fenglijun/SKMS/src/pages/user/login'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/data2/dev/fenglijun/SKMS/src/layouts/SecurityLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/data2/dev/fenglijun/SKMS/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/welcome",
            "exact": true
          },
          {
            "path": "/welcome",
            "name": "welcome",
            "icon": "smile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/data2/dev/fenglijun/SKMS/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "path": "/admin",
            "name": "admin",
            "icon": "crown",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/data2/dev/fenglijun/SKMS/src/pages/Admin'), loading: require('@/components/PageLoading/index').default}),
            "authority": [
              "admin"
            ],
            "routes": [
              {
                "path": "/admin/sub-page",
                "name": "sub-page",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/data2/dev/fenglijun/SKMS/src/pages/Welcome'), loading: require('@/components/PageLoading/index').default}),
                "authority": [
                  "admin"
                ],
                "exact": true
              }
            ]
          },
          {
            "name": "list.table-list",
            "icon": "table",
            "path": "/list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ListTableList' */'/data2/dev/fenglijun/SKMS/src/pages/ListTableList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "basic",
            "icon": "smile",
            "path": "/basic",
            "routes": [
              {
                "name": "project",
                "icon": "smile",
                "path": "/basic/project",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__basic__project' */'/data2/dev/fenglijun/SKMS/src/pages/basic/project'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "tablemodify",
                "path": "/basic/project/year/:id",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__basic__project__year' */'/data2/dev/fenglijun/SKMS/src/pages/basic/project/year'), loading: require('@/components/PageLoading/index').default}),
                "hideInMenu": true,
                "exact": true
              },
              {
                "name": "knowledge",
                "icon": "table",
                "path": "/basic/knowledge",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__basic__knowledge' */'/data2/dev/fenglijun/SKMS/src/pages/basic/knowledge'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "knowledge",
                "icon": "table",
                "path": "/basic/knowledge/CreateForm",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__basic__knowledge__components__CreateForm' */'/data2/dev/fenglijun/SKMS/src/pages/basic/knowledge/components/CreateForm'), loading: require('@/components/PageLoading/index').default}),
                "hideInMenu": true,
                "exact": true
              },
              {
                "name": "knowledge",
                "icon": "table",
                "path": "/basic/knowledge/UpdateForm",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__basic__knowledge__components__UpdateForm' */'/data2/dev/fenglijun/SKMS/src/pages/basic/knowledge/components/UpdateForm'), loading: require('@/components/PageLoading/index').default}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/data2/dev/fenglijun/SKMS/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/data2/dev/fenglijun/SKMS/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/data2/dev/fenglijun/SKMS/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
