<template>
    <div class="stockControl">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>库存管理</span>
            </div>
            <div class="text item">
                <el-tabs type="border-card">
                    <el-tab-pane label="库存情况">
                        <!-- 各类框 -->
                        <div>
                            <!-- 设置 inline 属性可以让表单域变为行内的表单域 -->
                            <el-form :inline="true" :model="formSearch" class="demo-form-inline">
                                <el-form-item label="所属分类">
                                <el-select v-model="formSearch.classname" placeholder="请选择分类">
                                    <el-option label="日用品" value="日用品"></el-option>
                                    <el-option label="零食" value="零食"></el-option>
                                    <el-option label="酒水" value="酒水"></el-option>
                                    <el-option label="饮料" value="饮料"></el-option>
                                    <el-option label="服装" value="服装"></el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="关键词">
                                <el-input id="keywords" v-model="formSearch.keywords" placeholder="查询商品名称、条形码"></el-input>
                                </el-form-item>

                                <el-form-item>
                                <el-button type="success" @click="onSearch" icon="el-icon-search">查询</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!-- 表格 -->
                        <el-table
                        :data="tableData"
                        style="width: 100%">
                            <el-table-column
                            label="商品条形码">
                            <template slot-scope="scope">
                                <span>{{ scope.row.barcode }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="商品名称">
                            <template slot-scope="scope">
                                <span>{{ scope.row.name }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="进价（元）">
                            <template slot-scope="scope">
                                <span>{{ scope.row.purchasingPrice }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="入库">
                            <template slot-scope="scope">
                                <span>{{ scope.row.storage }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="库存">
                            <template slot-scope="scope">
                                <span>{{ scope.row.inventory }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="已售"
                            width="80">
                            <template slot-scope="scope">
                                <span>{{ scope.row.haveBeenSold }}</span>
                            </template>
                            </el-table-column>
                            <el-table-column label="管理">
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                        <!-- 分页 -->
                        <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                        </el-pagination>
                    </el-tab-pane>
                    <el-tab-pane label="添加库存">添加库存</el-tab-pane>
                </el-tabs>
            </div>
        </el-card>

    </div> 
</template>
<script>
export default {
  data() {
    return {
      // 查询的表单
      formSearch: {
        classname: "",
        keywords: ""
      },
      tableData: [
        {
          barcode: "6911989262550",
          name: "海飞丝去屑洗发水",
          purchasingPrice: "7.00",
          storage: "10",
          inventory: "5",
          haveBeenSold: "5"
        },
        {
          barcode: "6911989262550",
          name: "海飞丝去屑洗发水",
          purchasingPrice: "7.00",
          storage: "10",
          inventory: "5",
          haveBeenSold: "5"
        },
        {
          barcode: "6911989262550",
          name: "海飞丝去屑洗发水",
          purchasingPrice: "7.00",
          storage: "10",
          inventory: "5",
          haveBeenSold: "5"
        },
        {
          barcode: "6911989262550",
          name: "海飞丝去屑洗发水",
          purchasingPrice: "7.00",
          storage: "10",
          inventory: "5",
          haveBeenSold: "5"
        }
      ]
    };
  },
  methods: {
    onSearch() {},
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="less">
.stockControl {
  .el-card {
    .el-card__header {
      font-size: 20px;
      font-weight: 600;
      text-align: left;
      background: #ccc;
    }
    .el-card__body {
      .text {
        .el-tabs {
          .el-tabs__content {
            .el-tab-pane {
              text-align: left;
              .el-pagination {
                text-align: left;
                margin-top:10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
