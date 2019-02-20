<template>
   <div class="accountM">
         <el-card class="box-card">
            <!-- 系统信息 -->
            <div slot="header">
                <span>账号管理
                </span>
            </div>
           <!-- 表格 -->
            <el-table
                ref="multipleTable"
                :data="acountData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <!-- 单选框 -->
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <!-- 用户名称  -->
                <el-table-column
                prop="username"
                label="用户名称"
                width="350">
                </el-table-column>
                <!-- 用户组 -->
                <el-table-column
                prop="usergroup"
                label="用户组"
                width="350">
                </el-table-column>
                <!-- 日期 -->
                <el-table-column
                prop="ctime"
                label="创建日期"
                >
                <template slot-scope="scope">{{ scope.row.cdate }}</template>
                </el-table-column>
                <!-- 管理 -->
                 <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">
                        <i class="el-icon-edit"></i>编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">
                        <i class="el-icon-delete"></i>删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
             <!-- 分页 -->
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
                    </el-pagination>
                </div>  
        </el-card>
   </div>
</template>
<script>
//引入moment模块
import moment from 'moment';
//引入qs模块
import qs from 'qs';
export default {
  data() {
    return {
      acountData: [
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        },
        {
          username: "李寻欢",
          usergroup: "超级管理员",
          cdate: "2019-01-30"
        }
      ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    };
  },
  methods: {
    handleSelectionChange(val) {
         this.multipleSelection = val;
    },
    handleEdit() {
        //点击编辑跳转至密码修改界面
        this.$router.push("/pwdedit");
    },
    handleDelete() {},
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
     handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>
<style lang="less">
.accountM {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 30px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
    .el-card__body{
        .el-table{
            .el-table__header-wrapper{
                .has-gutter{
                    .el-table_1_column_5{
                        .cell{
                            padding-left: 70px;
                        }
                    }
                }
            }
        }
    }
  }
}
</style>