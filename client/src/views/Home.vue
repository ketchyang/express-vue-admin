<template>
  <el-container class="container">
    <el-aside>
      <h1>后台管理系统</h1>
      <el-menu router :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-management"></i>内容管理
          </template>
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-reading"></i>文章
            </template>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-copy-document"></i>分类
            </template>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-collection-tag"></i>标签
            </template>
            <el-menu-item index="/labels/eidt">标签管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
}

h1 {
  text-align: center;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
