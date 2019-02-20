<template>
    <div class="saleList">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>销售明细</span> 
            </div>
            <div class="text item">
                <!-- tabs切换 -->
                <el-tabs type="border-card">
                    <el-tab-pane label="销售明细">
                        <!-- 起止时间 -->
                        <div class="block">
                            <el-date-picker
                            v-model="value6"
                            type="datetimerange"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['12:00:00']">
                            </el-date-picker>
                        </div>
                        <!-- 关键字查询 -->
                        <div class="warpper">
                            <el-input
                            placeholder="请输入关键字查询"
                            v-model="input10"
                            clearable>
                            </el-input>
                            <!-- 查询按钮 -->
                            <el-row>
                                <el-button type="success">查询</el-button>
                            </el-row>
                        </div>
                        <!-- 销售列表 -->
                        <el-table
                        :data="tableData2"
                        style="width: 100%"
                        :row-class-name="tableRowClassName">
                            <el-table-column
                            prop="orderNumber"
                            label="订单号">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="名称">
                            </el-table-column>
                            <el-table-column
                            prop="quantity"
                            label="数量">
                            </el-table-column>
                            <el-table-column
                            prop="actualPrice"
                            label="实际售价">
                            </el-table-column>
                            <el-table-column
                            prop="discounts"
                            label="优惠">
                            </el-table-column>
                            <el-table-column
                            prop="refund"
                            label="退款">
                            </el-table-column>
                            <el-table-column
                            prop="saleTime"
                            label="销售时间">
                            </el-table-column>
                        </el-table>
                        <!-- 分页 -->
                        <div class="paging">
                            <el-pagination
                                layout="prev, pager, next"
                                :total="50">
                            </el-pagination>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="商品出库">
                        
                    </el-tab-pane>
                    <el-tab-pane label="商品退货"></el-tab-pane>
                </el-tabs>    
            </div>
        </el-card>
    </div> 
</template>
<script>
export default {
     data() {
      return {
        value6: '',
        value7: '',
        input10: '',
        tableData2: [{
          orderNumber: '0217151458333',
          name: '海飞丝去屑洗发水',
          quantity: '3',
          actualPrice:'24',
          discounts:'2.00元/无',
          refund:'无退款',
          saleTime:'2012-02-17'
        }, {
          orderNumber: '0217151458333',
          name: '海飞丝去屑洗发水',
          quantity: '3',
          actualPrice:'24',
          discounts:'2.00元/无',
          refund:'无退款',
          saleTime:'2012-02-17'
        }, {
          orderNumber: '0217151458333',
          name: '海飞丝去屑洗发水',
          quantity: '3',
          actualPrice:'24',
          discounts:'2.00元/无',
          refund:'无退款',
          saleTime:'2012-02-17'
        }, {
          orderNumber: '0217151458333',
          name: '海飞丝去屑洗发水',
          quantity: '3',
          actualPrice:'24',
          discounts:'2.00元/无',
          refund:'无退款',
          saleTime:'2012-02-17'
        }]
      };
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
}
</script>
<style lang="less">
.saleList{
    .el-card{
        .el-card__header{
            font-size:20px;
            font-weight:600;
            background:#ccc;
            text-align:left;
        };
        .el-card__body{
            .text{
                .el-tabs{
                    .el-tabs__content{
                        .el-tab-pane{
                            .block{
                                text-align:left;
                            };
                            .warpper{
                                margin-top:10px;
                                .el-input{
                                    float:left;
                                    width:200px;
                                };
                                .el-row{
                                    .el-button{
                                        float:left;
                                        margin-left:10px;
                                    }
                                }
                            };
                            .paging{
                                text-align:left;
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