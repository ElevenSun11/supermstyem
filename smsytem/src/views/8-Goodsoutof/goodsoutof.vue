<template>
    <div class="goodsoutof">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品销售</span> 
            </div>
            <div class="text item">
                <!-- tabs切换 -->
                <el-tabs type="border-card">
                    <el-tab-pane label="销售明细">  </el-tab-pane>
                    <el-tab-pane label="商品出库">
                        <div class="text item">
                            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" label-position="left" size="small">
                                <!-- 商品条形码 -->
                                <el-form-item label="商品条形码 :" prop="barcode">
                                    <el-input type="text" v-model="ruleForm2.barcode" autocomplete="off"></el-input>
                                </el-form-item>
                                <!-- 数量 -->
                                <el-form-item label="数量" prop="stocknum">
                                    <el-input v-model.number="ruleForm2.stocknum"></el-input><br>
                                    <p class="remark">计重商品单位为kg</p>
                                </el-form-item>
                                <!-- 加入订单 -->
                                <el-form-item class='add'>
                                    <el-button type="primary" @click="submitForm('ruleForm2')">加入订单</el-button>
                                </el-form-item>
                            </el-form>
                            <!-- 表格 -->
                            <el-table
                                :data="tableData"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                prop="name"
                                label="名称">
                                </el-table-column>
                                <el-table-column
                                prop="number"
                                label="数量">
                                </el-table-column>
                                <el-table-column
                                prop="univalence"
                                label="单价（元）">
                                </el-table-column>
                                <el-table-column
                                prop="totalPrice"
                                label="总价（元）">
                                </el-table-column>
                                <el-table-column
                                prop="discountsTotalPrice"
                                label="优惠总价（元）">
                                </el-table-column>
                            </el-table>
                            <!-- 会员 -->
                            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="会员卡号" prop="pass">
                                    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm2')">确认提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>  
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
      ruleForm2: {
        barcode: "",
        stocknum: "",
        
      },
      rules2: {
        barcode: [
          { required: true, trigger: "blur", message: "请点击生成条形码" }
        ],
        stocknum: [
          { required: true, trigger: "blur", message: "请输入入库数量" }
        ]
      },
      tableData: [{
          name: '',
          number: '',
          univalence: '',
          totalPrice: '',
          discountsTotalPrice: ''
        }]
    };
  },
  methods:{
      submitForm(){}

  }
 
  


}
</script>
<style lang="less">
.goodsoutof{
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
                            .text{
                                .el-form{
                                    .el-input{
                                        width:200px;
                                        float:left;
                                    };
                                    .remark{
                                        text-align:left;
                                    };
                                    .el-button{
                                        float:left;
                                        background:green;
                                        border:green;
                                        border-radius:5px;
                                    }
                                };
                                .el-form{
                                    margin-top:10px;
                                }
                            }
                           
                        }
                    }
                    
                }
            }
        }
    }
}

</style>