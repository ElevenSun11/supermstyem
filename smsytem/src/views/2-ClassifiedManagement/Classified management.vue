<template>
    <div class="classM">
           <el-card class="box-card">
            <!-- 分类管理 -->
            <div slot="header">
                <span>分类管理
                    <i class="el-icon-d-caret"></i>
                </span>
            </div>
            <!-- 表格 -->
            <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <!-- 分类名称 -->
                <el-table-column
                prop="ClassN"
                label="分类名称"
                width=900;>
                </el-table-column>
            <!-- 管理 -->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"> <i class="el-icon-edit"></i></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
  
</template>
<script>
export default {
    data(){
        return{
            tableData:[
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"},
                {ClassN:"日用品"}
                
            ]
        }
    }
};
</script>
<style lang="less">
.classM {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 20px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
