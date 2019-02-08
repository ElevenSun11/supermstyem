<template>
    <div class="pwdEdit">
          <el-card class="box-card">
            <!-- 系统信息 -->
            <div slot="header">
                <span>修改账号密码
                    <i class="el-icon-circle-edit"></i>
                </span>
            </div>
            <!-- form表单 -->
            <div class="form">
                <el-form :model="editForm" status-icon :rules="rules" ref="editForm" label-width="100px" class="demo-ruleForm">
                    <!-- 密码 -->
                    <el-form-item label="原密码" prop="password">
                        <el-input type="password" v-model="editForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- 确认密码 -->
                    <el-form-item label="新密码" prop="newPwd">
                        <el-input type="password" v-model="editForm.newPwd" autocomplete="off"></el-input>
                    </el-form-item>
                     <!-- 确认密码 -->
                    <el-form-item label="新密码" prop="checkNewPwd">
                        <el-input type="password" v-model="editForm.checkNewPwd" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- 按钮 -->
                    <el-form-item>
                        <el-button type="primary" @click="editPwd('editForm')">修改</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      editForm: {
        password: "",
        newPwd: "",
        checkNewPwd: ""
      },
      rules: {
          //验证密码
          password:[
              {required:true,message:"请输入原来的密码",trigger:"blur"}
          ],
           newPwd:[
              {required:true,message:"请输入新密码",trigger:"blur"}
          ],
           checkNewPwd:[
              {required:true,message:"两次新密码输入不一致",trigger:"blur"}
          ]
      }
    };
  },
  methods:{
     editPwd(){
         this.$router.push("/accountManage")
     } 
  }
};
</script>
<style lang="less">
.pwdEdit {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 20px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
    .el-card__body {
      .form {
        .el-form {
          width: 400px;
          .el-form-item{
              .el-form-item__content{
                  .el-button{
                      margin-left: -230px;
                  }
              }
          }
        }
      }
    }
  }
}
</style>