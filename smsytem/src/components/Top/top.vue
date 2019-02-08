<template>
    <div class="top">
        <el-row>
            <el-col :span="12">
                <div  class="title">
                    欢迎您{{username}}
                    <span>修改账号密码</span>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="top-right">
                    <el-row>
                        <el-col :span="18" style="margin-top:30px">
                            欢迎您! 
                            <el-dropdown>
                            <span class="username el-dropdown-link">
                                {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click="center">个人中心</el-dropdown-item>
                                <el-dropdown-item @click="out">退出</el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                        <!-- <el-col :span="6">
                            <div class="avatar">
                                <img width="100%" height="100%" :src="avatarUrl" alt="">
                            </div>
                        </el-col> -->
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            username: "admin",
            // avatarUrl: 'http://127.0.0.1:8080/avatar.jpg'
        }
    },
    methods:{
        center(){
            
        },
        out(){
            // this.$router.push("/login")
            alert("1")
        }
    }
}
</script>
<style lang="less">
    .top {

        .title {
            margin-top: 30px;
            text-align: left;
            font-size: 28px;
            font-weight: 900;
            margin-left: 20px;
            span{
                font-size: 13px;
                font-weight: normal;
                margin-left: 20px;
            }
        }
        .top-right {
            color: #2d3a4b;
            text-align: right;
            .username {
               font-weight: 600;
            }
            .avatar {
                width: 52px;
                height: 52px;
                margin-top: 4px;
                margin-left: 30px;
                border-radius: 50%;
                img {
                    border-radius: 50%;
                }
            }
        }
    }
</style>