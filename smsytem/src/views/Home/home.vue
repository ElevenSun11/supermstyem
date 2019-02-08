<template>
    <div class="home">
        <!-- 最外层面板卡 -->
        <el-card class="box-card">
            <!-- 系统信息 -->
            <div slot="header" class="clearfix">
                <span>系统信息</span>
            </div>
            <!-- 提示文字 -->
              <el-alert
                title="商品总数: 500, 已销售总金额: 998.00, 库存商品总价: 9800.00"
                type="info"
                show-icon>
            </el-alert>
                <el-alert
                title="导入数据"
                type="success"
                show-icon>
            </el-alert>
             <!-- 左右 -->
             <div class="leftRight">
                  <el-row :gutter="20">
                      <!-- 左侧 -->
                    <el-col :span="6" >
                       <el-card class="box-card">
                           <!-- 标题 -->
                            <div slot="header" class="clearfix">
                                <span>销售排行</span>
                            </div>
                            <!-- 表格 -->
                            <div class="table">
                                <el-table
                                    :data="saleData"
                                    stripe
                                    style="width: 100%">
                                    <!-- 商品名称  -->
                                    <el-table-column
                                    prop="goodsName"
                                    label="商品名称">
                                    </el-table-column>
                                    <!-- 销量 -->
                                    <el-table-column
                                    prop="sale"
                                    label="销量">
                                    </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                    </el-col>
                    <!-- 右侧 -->
                    <el-col :span="6">
                           <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span>缺货商品</span>
                            </div>
                                <el-table
                                :data="shortageData"
                                style="width: 100%">
                                <!-- 商品名称-->
                                <el-table-column
                                prop="goodsname"
                                label="商品名称"
                                width="240px">
                                </el-table-column>
                                <!-- 库存 -->
                                <el-table-column
                                prop="inventory"
                                label="库存">
                                </el-table-column>
                                <!-- 操作 -->
                                <el-table-column
                                prop="handle"
                                label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">入库</el-button>
                                </template>
                                </el-table-column>
            </el-table>
                        </el-card>
                    </el-col>
            </el-row>
             </div>
           
        </el-card>
       
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      //销量数据
      saleData: [
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        },
        {
          goodsName: "海飞丝",
          sale: 10
        }
      ],
      shortageData: [
        {
          goodsname: "飘柔",
          inventory: 1
        },
        {
          goodsname: "飘柔",
          inventory: 1
        },
        {
          goodsname: "飘柔",
          inventory: 1
        },
        {
          goodsname: "飘柔",
          inventory: 1
        },
        {
          goodsname: "飘柔",
          inventory: 1
        },
        {
          goodsname: "飘柔",
          inventory: 1
        }
      ]
    };
  }
};
</script>
<style lang="less">
.home {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 20px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
    .el-card__body {
      .el-alert--info {
        background-color: lightslategrey;
        color: #ffffff;
      }
      .el-alert--success {
        margin-top: 20px;
      }
    }
    .el-card__body {
      .leftRight {
        .el-row {
          .el-col {
            width: 600px;
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>
