<template>
    <div>
        <template v-for="item in routes">
            
            <el-submenu :index="item.name" v-if="!item.noDropdown&&!item.hidden" :key="item.name">
                <template slot="title">
                    <icon-svg v-if='item.icon' :icon-class="item.icon" /> {{item.name}}
                </template>
                <template v-for="child in item.children" v-if='!child.hidden'>
                    <sidebar-item class='menu-indent' 
                                  v-if='child.children && child.children.length > 0' 
                                  :routes='[child]' 
                                  :key="child.path"> 
                    </sidebar-item>
                    <router-link v-else class="menu-indent" :to="item.path+'/'+child.path" :key="child.path">
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{child.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .svg-icon {
        margin-right: 10px;
    }
    .hideSidebar .menu-indent{
        display: block;
        text-indent: 10px;
    }
</style>

