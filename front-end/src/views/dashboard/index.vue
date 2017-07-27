<template>
  <div class="dashboard-container">
    <div class='dashboard-text'>name:{{name}}</div>
    <div class='dashboard-text'>role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
/* eslint-disable */
    // import { mapGetters } from 'vuex';
    export default {
      name: 'dashboard',
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
