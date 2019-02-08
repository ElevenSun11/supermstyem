<template>
    <div class="addVip">
          <el-card class="box-card">
            <!-- 标题 -->
            <div slot="header">
                <span>添加编辑账号
                    <i class="el-icon-circle-plus"></i>
                </span>
            </div>
            <!-- form表单 -->
            <el-form :label-position="labelPosition"  label-width="90px" :model="vipForm"  :rules="rules"  ref="vipForm">
                <!-- 用户名字 -->
                <el-form-item label="真实名字:" prop="name">
                    <el-input v-model="vipForm.name"></el-input>
                </el-form-item>
                <!-- 会员卡卡号 -->
                <el-form-item label="会员卡卡号:" prop="vipCardNum">
                    <el-input v-model="vipForm.vipCardNum"></el-input>
                </el-form-item>
                <!-- 用户组 -->
                <el-form-item label="用户组:" prop="vipGroup"><br>
                    <el-select v-model="vipForm.vipGroup" placeholder="请选择用户组">
                    <el-option label="普通用户" value="普通用户"></el-option>
                    <el-option label="高级VIP客户" value="高级VIP客户"></el-option>
                    </el-select>
                </el-form-item>
                <!-- 身份证号 -->
                <el-form-item label="身份证号:" prop="IDnum">
                    <el-input v-model="vipForm.IDnum"></el-input>
                </el-form-item>
                <!-- 用户状态 -->
                <el-radio-group label="用户状态:" v-model="vipForm.radio" >
                    <el-radio :label="1">禁用</el-radio>
                    <el-radio :label="2">启用</el-radio>
                </el-radio-group>
                <!-- 手机号码 -->
                <el-form-item label="手机号码:" prop="telN">
                    <el-input v-model="vipForm.telN"></el-input>
                </el-form-item>
                <!-- 座机号码 -->
                 <el-form-item label="座机号码:" prop="telN2">
                    <el-input v-model="vipForm.telN2"></el-input>
                </el-form-item>
                <!-- 邮箱地址 -->
                 <el-form-item label="邮箱地址:" prop="Email">
                    <el-input v-model="vipForm.Email"></el-input>
                </el-form-item>
                <!-- 地区选择 -->

                <!-- 详细地址 -->
                   <el-form-item label="详细地址:" prop="adress">
                    <el-input v-model="vipForm.adress"></el-input>
                </el-form-item>
                <!-- 邮政编码 -->
                 <el-form-item label="邮政编码:" prop="PostalCode">
                    <el-input v-model="vipForm.PostalCode"></el-input>
                </el-form-item>
                <!-- 提交按钮 -->
                 <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                 </el-form-item>

            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      vipForm: {
        name: "",
        vipCardNum: "",
        vipGroup:"",
        IDnum:"",
        telN:"",
        telN2:"",
        Email:"",
        adress:"",
        PostalCode:"",
      },
      rules: {
          //姓名验证
          name:[
              { required: true, message: "请输入真实姓名", trigger: "blur" }
          ],
          
          vipCardNum:[
              { required: true, message: "请输入会员卡卡号", trigger: "blur" }
          ],
          vipGroup:[
              { required: true, message: "请选择分组", trigger: "blur" }
          ],
          IDnum:[
              { required: true, message: "请输入身份证号码", trigger: "blur" }
          ],
          telN:[
              { required: true, message: "请输入手机号码", trigger: "blur" }
          ],
          telN2:[
              { required: true, message: "请输入座机号码", trigger: "blur" }
          ],
          Email:[
              { required: true, message: "请输入邮箱", trigger: "blur" }
          ],
          adress:[
              { required: true, message: "请输入地址", trigger: "blur" }
          ],
           PostalCode:[
              { required: true, message: "请输入邮编号码", trigger: "blur" }
          ],

      }
    };
  },
  methods:{
      onSubmit(){
          this.$router.push("/vipmanage")
      }
  }
};
</script>
<style lang="less">
.addVip {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 20px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
    .el-card__body{
        .el-form{
            width: 400px;
            .el-form-item{
                .el-form-item__content{
                    line-height: 0;
                    .el-button{
                        margin-left: -386px;
                        background-color: #2d3a4b;
                        border: 1px solid #2d3a4b;
                    }
                }
            }
        }
    }
  }
}
</style>