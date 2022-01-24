const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    redirectTo: '/demo?form=home',
    windowOptions: {
      title: 'App Home (redirect to demo)',
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
    },
    createConfig: {
      showSidebar: true, // 侧边导航栏
      showCustomTitlebar: true, // 自定义标题栏
      saveWindowBounds: true,
      openDevTools: true,
    },
  },
]

export default routes
