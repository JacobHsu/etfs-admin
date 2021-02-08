// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'Layout',
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    meta: { hidden: true }
  },
  {
    path: '',
    component: 'Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/documentation',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'views/documentation/index',
        name: 'Documentation',
        meta: {
          title: 'documentation',
          icon: 'documentation',
          affix: true
        }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/table',
    component: 'Layout',
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
      title: 'table',
      icon: 'table'
    },
    children: [
      {
        path: 'dynamic-table',
        component: 'views/table/dynamic-table/index',
        name: 'DynamicTable',
        meta: { title: 'dynamicTable' }
      },
      {
        path: 'draggable-table',
        component: 'views/table/draggable-table',
        name: 'DraggableTable',
        meta: { title: 'draggableTable' }
      },
      {
        path: 'inline-edit-table',
        component: 'views/table/inline-edit-table',
        name: 'InlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'complex-table',
        component: 'views/table/complex-table',
        name: 'ComplexTable',
        meta: { title: 'complexTable' }
      }
    ]
  },
  {
    path: '/tab',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'views/tab/index',
        name: 'Tab',
        meta: {
          title: 'tab',
          icon: 'tab'
        }
      }
    ]
  },
  {
    path: '/error',
    component: 'Layout',
    redirect: 'noredirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: 'views/error-page/401',
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: 'views/error-page/404',
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/error-log',
    component: 'Layout',
    redirect: 'noredirect',
    children: [
      {
        path: 'log',
        component: 'views/error-log/index',
        name: 'ErrorLog',
        meta: {
          title: 'errorLog',
          icon: 'bug'
        }
      }
    ]
  },
  {
    path: '/excel',
    component: 'Layout',
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: 'views/excel/export-excel',
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: 'views/excel/select-excell',
        name: 'SelectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'export-merge-header',
        component: 'views/excel/merge-header',
        name: 'MergeHeader',
        meta: { title: 'mergeHeader' }
      },
      {
        path: 'upload-excel',
        component: 'views/excel/upload-excel',
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },
  {
    path: '/zip',
    component: 'Layout',
    redirect: '/zip/download',
    meta: {
      title: 'zip',
      icon: 'zip',
      alwaysShow: true
    },
    children: [
      {
        path: 'download',
        component: 'views/zip/index',
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  },
  {
    path: '/pdf',
    component: 'Layout',
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: 'views/pdf/index',
        name: 'PDF',
        meta: {
          title: 'pdf',
          icon: 'pdf'
        }
      }
    ]
  },
  {
    path: '/theme',
    component: 'Layout',
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: 'views/theme/index',
        name: 'Theme',
        meta: {
          title: 'theme',
          icon: 'theme'
        }
      }
    ]
  },
  {
    path: '/i18n',
    component: 'Layout',
    children: [
      {
        path: 'index',
        component: 'views/i18n-demo/index',
        name: 'I18n',
        meta: {
          title: 'i18n',
          icon: 'international'
        }
      }
    ]
  },
  {
    path: 'https://github.com/Armour/vue-typescript-admin-template',
    meta: {
      title: 'externalLink',
      icon: 'link'
    }
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]
