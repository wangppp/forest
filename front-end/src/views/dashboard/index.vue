<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    <el-button @click="getList">点击获取列表</el-button>
  </div>
</template>

<script>
/* eslint-disable */
    // import { mapGetters } from 'vuex';
    import getList from '@/api/dashboard';

    export default {
      name: 'dashboard',
      methods: {
        getList () {
          getList().then(
            (response) => {
              
            }
          )
        }
      },
      computed: {
        // ...mapGetters([
        //   'name',
        //   'roles'
        // ])
        'name' () {
          return 'admin';
        },
        'roles' () {
          return ['admin', 'editor'];
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
