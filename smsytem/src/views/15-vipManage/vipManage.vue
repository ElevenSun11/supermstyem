<template>
    <div class="vipM">
          <el-card class="box-card">
            <!-- 会员管理 -->
            <div slot="header">
                <span>会员管理
                    <i class="el-icon-d-caret"></i>
                </span>
            </div>
            <!-- 搜索 -->
            <div class="search">
                搜索:&emsp;<input type="text"> &nbsp;<span>会员卡,会员名,电话,手机</span>
                &nbsp;<button type="button"> 查询 </button>
            </div>
            <!-- 表格 -->
            <el-table
            :data="vipData"
            stripe
            style="width: 100%">
            <!-- 会员卡卡号 -->
                <el-table-column
                prop="cardNum"
                label="会员卡卡号">
                </el-table-column>
             <!-- 会员姓名 -->
                <el-table-column
                prop="vipName"
                label="会员姓名">
                </el-table-column>
             <!-- 会员等级 -->
                <el-table-column
                prop="vipGrade"
                label="会员等级">
                </el-table-column>
             <!-- 会员积分 -->
                <el-table-column
                prop="vipScore"
                label="会员积分">
                </el-table-column>
             <!-- 折扣 -->
                <el-table-column
                prop="rebate"
                label="折扣">
                </el-table-column>
             <!-- 手机号 -->
                <el-table-column
                prop="tel"
                label="手机号">
                </el-table-column>
             <!-- 座机号 -->
                <el-table-column
                prop="tel2"
                label="座机号">
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
            vipData:[
                {
                    cardNum:"111",
                    vipName:"黄真香",
                    vipGrade:"普通会员",
                    vipScore:"10",
                    rebate:"20%",
                    tel:"18888888888",
                    tel2:"028-123456" 
                },
                 {
                    cardNum:"111",
                    vipName:"黄真香",
                    vipGrade:"普通会员",
                    vipScore:"10",
                    rebate:"20%",
                    tel:"18888888888",
                    tel2:"028-123456" 
                },
                 {
                    cardNum:"111",
                    vipName:"黄真香",
                    vipGrade:"普通会员",
                    vipScore:"10",
                    rebate:"20%",
                    tel:"18888888888",
                    tel2:"028-123456" 
                },
                 {
                    cardNum:"111",
                    vipName:"黄真香",
                    vipGrade:"普通会员",
                    vipScore:"10",
                    rebate:"20%",
                    tel:"18888888888",
                    tel2:"028-123456" 
                },
                 {
                    cardNum:"111",
                    vipName:"黄真香",
                    vipGrade:"普通会员",
                    vipScore:"10",
                    rebate:"20%",
                    tel:"18888888888",
                    tel2:"028-123456" 
                },
                 {
                    cardNum:"111",
                    vipName:"黄真香",
                    vipGrade:"普通会员",
                    vipScore:"10",
                    rebate:"20%",
                    tel:"18888888888",
                    tel2:"028-123456" 
                },
            ]
        }
    }
};
</script>
<style lang="less">
.vipM {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 20px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
    .el-card__body{
        .search{
            width: 600px;
            font-size: 14px;
            margin-left: -80px;
            margin-bottom: 10px;
            input{
                box-shadow:  0 0 10px #CCC;
                border-radius: 4px;
            }
            span{
                font-size: 12px;
                color: #ccc;
            }
            button{
                border-radius: 5px;
                background-color: #2d3a4b;
                color: #ffffff;
                width: 54px;
                line-height: 20px;
            }
        }
        .el-table{
            padding: 8px 0 0 0;
            border-top: 3px solid #cccccc;
            // border-bottom: 1px solid #cccccc;
        }
    }
  }
}
</style>
