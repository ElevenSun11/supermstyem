<template>
    <!-- 导航列表 -->
             <el-menu
                background-color="#2d3a4b" 
                text-color="#ccc"
                active-text-color="#ccc"
                :default-active="this.$route.path"
                collapse-transition
                router>
                    <!-- 导航一 -->
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-document"></i>分类管理</template>
                            <el-menu-item index="/ClassifiedManagement">分类管理</el-menu-item>
                            <el-menu-item index="/addclass">添加分类</el-menu-item>                            
                    </el-submenu>
                    <!-- 导航二 -->
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-goods"></i>商品管理</template>
                            <el-menu-item index="/goodsManage">商品管理</el-menu-item>
                            <el-menu-item index="/addgoods">添加商品</el-menu-item>                            
                    </el-submenu>
                    <!-- 导航三 -->
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-view"></i>进货管理</template>
                            <el-menu-item index="/stockcontrol">库存管理</el-menu-item>
                            <el-menu-item index="/addstock">添加库存</el-menu-item>                            
                    </el-submenu>
                     <!-- 导航四 -->
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-sold-out"></i>出货管理</template>
                            <el-menu-item index="/salelist">销售列表</el-menu-item>
                            <el-menu-item index="/goodsoutof">商品出库</el-menu-item>
                            <el-menu-item index="/returnGoods">商品退货</el-menu-item>                            
                    </el-submenu>
                    <!-- 导航五 -->
                    <el-submenu index="5">
                        <template slot="title"><i class="el-icon-edit-outline"></i>统计管理</template>
                            <el-menu-item index="/StatisticalManage">销售统计</el-menu-item>
                            <el-menu-item index="/IncomingStatistics">进货统计</el-menu-item>                            
                    </el-submenu>
                    <!-- 导航六-->
                    <el-submenu index="6">
                        <template slot="title"><i class="el-icon-service"></i>账号管理</template>
                            <el-menu-item index="/accountManage">账号管理</el-menu-item>                            
                            <el-menu-item index="/addAcount">添加账号</el-menu-item>
                            <el-menu-item index="/pwdedit">密码修改</el-menu-item>                            
                    </el-submenu>
                    <!-- 导航七 -->
                    <el-submenu index="7">
                        <template slot="title"><i class="el-icon-printer"></i>会员管理</template>
                            <el-menu-item index="/vipmanage">账号管理</el-menu-item>
                            <el-menu-item index="/addVip">添加账号</el-menu-item>                            

                    </el-submenu>
                    <!-- 导航八 -->
                    <el-submenu index="8">
                        <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
                            <el-menu-item index="/">系统信息</el-menu-item>
                            <el-menu-item index="/">系统配置</el-menu-item>
                            <el-menu-item index="/">权限管理</el-menu-item>
                            <el-menu-item index="/">添加管理组</el-menu-item>                      
                    </el-submenu>
            </el-menu>
</template>
<script>
export default {};
</script>
<style lang="less">
.el-menu {
  color: #fff;
  width: 100%;
  .el-submenu {
      width: 100%;
    .el-submenu__title {
      color: #fff;
      .el-menu-item {
        color: #fff;
      }
    }
  }
}
</style>

