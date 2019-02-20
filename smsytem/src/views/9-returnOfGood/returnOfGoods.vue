<template>
    <div class="returnOfGoods">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品销售</span> 
            </div>
            <div class="text item">
                <!-- tabs切换 -->
                <el-tabs type="border-card">
                    <el-tab-pane label="销售明细">  </el-tab-pane>
                    <el-tab-pane label="商品出库"></el-tab-pane>
                    <el-tab-pane label="商品退货">
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="订单号" prop="text">
                                <el-input type="text" v-model="ruleForm2.text" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">查询</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                </el-tabs>    
            </div>
        </el-card>
    </div> 
</template>
<script>
export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          text:''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style lang="less">
.returnOfGoods{
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
                           .el-form{
                               .el-form-item{
                                   text-align:left;
                                   .el-form-item__label{
                                       text-align:left;
                                   };
                                   .el-form-item__content{
                                       .el-input{
                                           width:200px;
                                       }
                                   }
                               }
                           }
                       };
                       .el-button{
                           float:left;
                           background:green;
                           border:green;
                           border-radius:5px;
                       }
                   }
               }
           }
       }
   }
}

</style>