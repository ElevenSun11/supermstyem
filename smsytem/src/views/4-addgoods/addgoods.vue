<template>
  <div class="addgoods">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加商品</span>
      </div>
      <div class="text item">
        <el-form :model="goodsAddForm" status-icon :rules="rules" ref="goodsAddForm" label-width="100px" class="demo-ruleForm" label-position="left" size="small">
              <!-- 所属分类 -->
              <el-form-item label="所属分类 :" prop="classname" label-width="100px">
                <el-select v-model="goodsAddForm.classname" placeholder="请选择">
                  <el-option label="日用品" value="日用品"></el-option>
                  <el-option label="食品" value="食品"></el-option>
                  <el-option label="服装" value="食品"></el-option>
                  <el-option label="酒水" value="食品"></el-option>
                 
                </el-select>
              </el-form-item>
              <!-- 商品条形码 -->
              <el-form-item label="商品条形码 :" prop="barcode">
                <el-input type="text" v-model="goodsAddForm.barcode" autocomplete="off"></el-input>
                <el-button type="primary" @click="onSubmit">生成条形码</el-button>
              </el-form-item>
              <!-- 商品名称 -->
              <el-form-item label="商品名称 :" prop="goodsname">
                <el-input type="text" v-model="goodsAddForm.goodsname" autocomplete="off"></el-input>
              </el-form-item>
              <!-- 商品进价 -->
              <el-form-item label="商品进价" prop="costprice">
                <el-input v-model.number="goodsAddForm.costprice" @blur="calcJG"></el-input>
              </el-form-item>
              <!-- 商品售价 -->
              <el-form-item label="商品售价 :" prop="saleprice">
                <el-input v-model.number="goodsAddForm.saleprice"></el-input>
              </el-form-item>
              <!-- 市场价 -->
              <el-form-item label="市场价 :" prop="marketprice">
                <el-input v-model.number="goodsAddForm.marketprice"></el-input><br>
                <p class="remark">默认市场价为商品售价的1.2倍</p>
              </el-form-item>

              <!-- 入库数量 -->
              <el-form-item label="入库数量" prop="stocknum">
                <el-input v-model.number="goodsAddForm.stocknum"></el-input>
              </el-form-item>
              <!-- 商品重量 -->
              <el-form-item label="商品重量" prop="weight">
                <el-input v-model.number="goodsAddForm.weight"></el-input><br>
                <p class="remark">计重商品单位为kg</p>
              </el-form-item>
              <!-- 商品单位 -->
              <el-form-item label="商品单位" prop="unit">
                <el-input v-model.number="goodsAddForm.unit"></el-input>
              </el-form-item>
              <!-- 会员优惠 -->
              <el-form-item label="会员优惠：">
                <el-radio-group v-model="goodsAddForm.isdiscount">
                  <el-radio label="1">享受</el-radio>
                  <el-radio label="0">不享受</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 是否促销 -->
              <el-form-item label="是否促销：">
                <el-radio-group v-model="goodsAddForm.ispromotion">
                  <el-radio label="1">启用</el-radio>
                  <el-radio label="0">禁用</el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- 商品简介 -->
              
              <el-form-item label="商品简介：" prop="details">
                <el-input type="textarea" v-model="goodsAddForm.details"></el-input>
                <p class="remark">不超过200个汉字</p>
              </el-form-item>
              <!-- 添加按钮 -->
            
              <el-form-item>
                <el-button type="primary" @click="submitForm('goodsAddForm')">添加商品</el-button>
              </el-form-item>
           
            </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
//引入qs
import qs from 'qs';

export default {
  data() {
    return {
      //添加商品表单数据
      goodsAddForm: {
        classname: "",
        barcode: "",
        goodsname: "",
        saleprice: "",
        marketprice: "",
        costprice: "",
        stocknum: "",
        weight:"",
        unit: "",
        details: "",
        isdiscount: "1",
        ispromotion: "1"
      },
      //验证规则
      rules: {
        classname: [{ required: true, trigger: "blur", message: "请选择分类" }],
        barcode: [
          { required: true, trigger: "blur", message: "请点击生成条形码" }
        ],
        goodsname: [
          { required: true, trigger: "blur", message: "请输入商品名称" }
        ],
        costprice: [{ required: true, trigger: "blur", message: "请输入进价" }],
        stocknum: [
          { required: true, trigger: "blur", message: "请输入入库数量" }
        ]
      }
    };
  },
 
  methods: {
    //点击添加商品按钮 触发这个函数
    submitForm(forName){
      //获取表单组件 调用验证方法
      
        //如果所有验证通过 valid就是true
        if(forName) {
          //收集用户输入的所有商品数据
          let params = {
            classname:this.goodsAddForm.classname,
            barcode:this.goodsAddForm.barcode,
            goodsname:this.goodsAddForm.goodsname,
            saleprice:this.goodsAddForm.saleprice,
            marketprice:this.goodsAddForm.marketprice,
            costprice:this.goodsAddForm.costprice,
            stocknum:this.goodsAddForm.stocknum,
            weight:this.goodsAddForm.weight,
            unit:this.goodsAddForm.unit,
            details:this.goodsAddForm.details,
            isdiscount:this.goodsAddForm.isdiscount,
            ispromotion:this.goodsAddForm.ispromotion
          };

          //使用ajax发送数据给后端
          this.axios.post('http://127.0.0.1:3000/goodsmanage/goodsadd',qs.stringify(params))
              .then(response => {
                //接收后端返回的错误码 和 提示信息
                let {error_code,reason} = response.data;

                //根据后端响应的数据判断
                if(error_code === 0){
                  //弹出成功的提示
                  this.$message({
                    type:'success',
                    message:reason
                  });

                  //跳转到商品管理列表
                  this.$router.push('/goodsManage')
                } else {
                  //弹出失败的提示
                  this.$message.error(reason);
                }
              })
              .catch(err => {
                console.log(err)
              })
        } else {
          //否则就是false
          return false;
        }
      
    },
    //定义方法  市场价是商品售价的1.2倍 售价是进价的5倍
    calcJG() {
      let v = this;
      v.goodsAddForm.saleprice = (v.goodsAddForm.costprice * 5).toFixed(2);
      v.goodsAddForm.marketprice = (1.2 * v.goodsAddForm.saleprice).toFixed(2);
    },
    //定义条形码方法
    onSubmit() {
      this.goodsAddForm.barcode = new Date().getTime();
    }

  },
  created() {
    this.username = this.$route.query.username;
  },

};
</script>



<style lang="less">
.addgoods{
  .el-card{
    .el-card__header{
      font-size:20px;
      font-weight:600;
      text-align:left;
      background:#ccc;
    };
    .el-card__body{
      .text{
        .el-form{
          .el-form-item{
            .el-form-item__content{
              .el-select{
                float:left;
              };
              .el-input{
                width:200px;
                float:left;
              };
              .el-button{
                float:left;
                margin-left:10px;
                background:green;
                border:green;
                border-radius:5px;
              };
              .remark{
                text-align:left;
              };
              .el-radio-group{
                float:left;
                margin-top:8px;
              }
            }
          }
        }
      }
    }
  }
}




</style>
