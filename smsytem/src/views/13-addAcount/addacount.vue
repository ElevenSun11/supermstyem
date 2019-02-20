<template>
   <div class="accountM">
         <el-card class="box-card">
            <!-- 系统信息 -->
            <div slot="header">
                <span>添加管理员帐号
                    <i class="el-icon-circle-plus"></i>
                </span>
            </div>
            <!-- form表单 -->
            <div class="form">
                <el-form :model="addForm" status-icon :rules="rules" ref="addForm" label-width="100px" class="demo-ruleForm">
                    <!-- 用户名 -->
                    <el-form-item label="账号" prop="username">
                        <el-input type="text" v-model="addForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="addForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- 确认密码 -->
                    <el-form-item label="确认密码" prop="checkPwd">
                        <el-input type="password" v-model="addForm.checkPwd" autocomplete="off"></el-input>
                    </el-form-item>
                     <!-- 选中用户组 -->
                    <el-form-item label="选择用户组" prop="userGroup">
                        <el-select v-model="addForm.userGroup" placeholder="请选择用户组">
                        <el-option label="普通用户" value="普通用户"></el-option>
                        <el-option label="高级管理员" value="高级管理员"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 按钮 -->
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('addForm')">添加</el-button>
                        <el-button @click="resetForm('addForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
   </div>
</template>
<script>
import qs from 'qs';
export default {
  data() {
    //验证密码的函数
    const pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 3 || value.length > 12) {
        callback(new Error("密码长度 3 - 12 位"));
      } else {
        if (this.addForm.checkPwd !== "") {
          // 如果确认密码不为空
          this.$refs.addForm.validateField("checkPwd"); // 调用确认密码的验证（一致性验证）
        }
        callback(); //成功的回调函数
      }
    };
    //验证确认密码的函数
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.addForm.password) {
        // 如果确认密码 和 密码不同
        callback(new Error("两次密码输入不一致"));
      }
      callback(); //成功的回调函数
    };
    return {
      addForm: {
        username: "",
        password: "",
        checkPwd: "",
        userGroup: ""

      },
      rules: {
        //验证用户名
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 12, message: "请输入3-12位的用户名", trigger: "blur" }
        ],
        //验证密码
        password: [{ required: true, validator: pass, trigger: "blur" }],
        //验证确认密码
        checkPwd: [{ required: true, validator: checkPass, trigger: "blur" }],
        // 用户组
        userGroup: [
            { required: true, message: '请选择用户组', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    //点击登录按钮 触发此函数
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            username: this.addForm.username,
            password: this.addForm.password,
            userGroup: this.addForm.userGroup
            
          };
          
           // 使用axios发送数据给后端
          this.axios.post('http://127.0.0.1:3000/account/accountadd', qs.stringify(params))
            .then(response => {
              // 接收后端返回的错误码 和 提示信息
              let { error_code,  reason } = response.data;

              // 根据后端响应的数据判断
              if (error_code === 0) {
                // 弹出成功的提示
                this.$message({
                  type: 'success',
                  message: reason
                });

                // 跳转到账号管理列表
                this.$router.push('/accountmanage')
              } else {
                // 弹出失败的提示
                this.$message.error(reason);
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          alert("很遗憾注册失败");
          return false;
        };
      });
    }
  }
};
</script>
<style lang="less">
.accountM {
  .el-card {
    .el-card__header {
      text-align: left;
      padding-left: 20px;
      background-color: #cccccc;
      font-size: 20px;
      font-weight: 600;
    }
    .el-card__body{
      .form{
        .el-form {
          width: 400px;
        }
      }
    }
  }
}
</style>

