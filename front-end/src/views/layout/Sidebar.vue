<template>
    <el-menu mode="vertical" theme="dark" :default-active="$route.path">
        <sidebar-item :routes='permission_routes'></sidebar-item>
    </el-menu>
</template>

<script>
/* eslint-disable */
    import SidebarItem from './SidebarItem';
    import Login from '@/views/login';
    import Err404 from '@/views/404';
    import Layout from '@/views/layout/layout';
    import dashboard from '@/views/dashboard';

    export default {
      components: { SidebarItem },
      computed: {
        permission_routes() {
          return [
            {
              path: '/',
              component: Layout,
              redirect: 'noredirect',
              name: 'Example',
              icon: 'zujian',
              children: [
                { path: '/',name: 'Form', icon: 'zonghe' }
              ]
            }
          ];
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
    min-height: 100%;
}

</style>
