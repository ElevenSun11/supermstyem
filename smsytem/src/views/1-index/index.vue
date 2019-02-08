<template>
    <el-container>
        <!-- 左侧导航 -->
        <el-aside width="280px">
            <!-- 左侧顶部标题 -->
            <div class="toptitle">
                <h2>华联超市管理系统</h2>
                <p>你好 admin</p>
                <p>
                    <span style="font-size:13px">管理首页&emsp;</span>
                    <span style="font-size:13px">退出系统</span>                    
                </p>
            </div>
           <Nav></Nav>
        </el-aside>
        <el-container>
            <!-- 右侧头部 -->
            <el-header style="height:110px;">
                <top></top>
            </el-header>
            <!-- 右侧中间内容部分 -->
            <el-main>
                <!-- 路由出口 -->
                    <router-view />
            </el-main>
            <!-- 右侧底部部分 -->
            <el-footer>
                <bottom></bottom>
            </el-footer>
        </el-container>
    </el-container>
</template>
<script>
// 引入导航组件
import Nav from '@/components/NAV/nav.vue';
// 引入头部组件
import top from '@/components/Top/top.vue';
// 引入底部组件
import bottom from '@/components/Bottom/Bottom.vue';
export default {
    //注册组件
    components:{
        Nav,
        top,
        bottom
    }
}
</script>
<style lang="less">
    .el-container {
  height: 100%;
  // 左侧
  .el-aside {
    background-color: #2d3a4b;
    text-align: center;
    .toptitle{
        color: #ccc;
        margin-top: 30px;
        h2{
            margin-top: 40px;
        }
        p{
            text-align: right;
            margin-right: 15px;
        }
      

    }
    .el-menu{     
        color: #fff;   
        .el-submenu{
            .el-submenu__title{
                 color: #fff;
                .el-menu-item{
                    color: #fff;                  
                }
            }
        }
    }
  }
  // 右侧中间
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
  }
  // 右侧头和尾
  .el-header,
  .el-footer {
    background-color: #fff;
    color: #2d3a4b;
    text-align: center;
    line-height: 60px;
  }
   .el-header {
       border-bottom: 1px solid #ccc;
   }
}
</style>
