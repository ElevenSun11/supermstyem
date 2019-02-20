
<template>
    <div class="login">
        <div class="loginWrapper" >
             <!-- 登录标题 -->
            <h2 class="title">
                <i class="el-icon-menu"></i>
                华联超市管理系统-登录
            </h2>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
                <!-- 用户名 -->
                <el-form-item label="账户名" prop="usernamr">
                    <el-input type="text" v-model="loginForm.usernamr" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 密码 -->      
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <!-- 确认密码 -->       
                <el-form-item label="确认密码" prop="checkPwd">
                    <el-input type="password" v-model="loginForm.checkPwd"></el-input>
                </el-form-item>
                <!-- 按钮 -->            
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm'),dialogVisible = true">提交</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>

                </el-form-item>
            </el-form>
        </div>
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
        if (this.loginForm.checkPwd !== "") {
          // 如果确认密码不为空
          this.$refs.loginForm.validateField("checkPwd"); // 调用确认密码的验证（一致性验证）
        }
        callback(); //成功的回调函数
      }
    };
    //验证确认密码的函数
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginForm.password) {
        // 如果确认密码 和 密码不同
        callback(new Error("两次密码输入不一致"));
      }
      callback(); //成功的回调函数
    };
    return {
      loginForm: {
        usernamr: "",
        password: "",
        checkPwd: ""
      },
      rules: {
        //验证用户名
        usernamr: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 12, message: "请输入3-12位的用户名", trigger: "blur" }
        ],
        //验证密码
        password: [{ required: true, validator: pass, trigger: "blur" }],
        //验证确认密码
        checkPwd: [{ required: true, validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    //点击登录按钮 触发此函数
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            username: this.loginForm.username,
            password: this.loginForm.password
          };
          alert("恭喜您!登录成功即将进入华联超市管理系统");
          //发送请求 把参数发给后端（把账号和密码发给后端 验证是否存在这个账号）
          this.axios.post('http://127.0.0.1:3000/login/checklogin',qs.stringify(params))
          .then(response =>{
            //接收后端返回的数据
            let {error_code,reason,token} = response.data;
            //判断
            if(error_code===0){
              //把token存入浏览器本地存储中
              window.localStorage.setItem('token',token);
              //弹成功提示
              this.$message({
                type:'success',
                message:reason
              })
              //跳转到后端首页
              this.$router.push('/')

            }else{
              //弹失败提示
              this.$message.error(reason);
            }
          })
          .catch(err =>{
            console.log(err)
          })
        } else {
          alert("很遗憾验证失败");
          return false;
        }
      });
    },
    //点击重置按钮 触发此函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .loginWrapper {
    width: 400px;
    height: 400px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #ffffff;
    // 垂直水平居中
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    .title {
      font-size: 20px;
      margin-left: 50px;
      margin-top: 40px;
    }
    .el-form {
      margin: 30px 40px 30px 10px;
      .el-form-item {
        .el-form-item__label {
          color: #ffffff;
        }
      }
    }
  }
}
</style>

