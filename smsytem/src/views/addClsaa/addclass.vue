<template>
    <div class="addclass">
         <el-card class="box-card">
            <!-- 系统信息 -->
            <div slot="header">
                <span>添加管理
                    <i class="el-icon-circle-plus"></i>
                </span>
            </div>
            <!-- form表单 -->
            <div class="form">
                <el-form :model="goodsForm" status-icon :rules="rules" ref="goodsForm" label-width="100px" class="demo-ruleForm">
                       <!-- 所属分类 -->
                    <el-form-item label="所属分类" prop="goodsGroup"><br>
                        <el-select v-model="goodsForm.goodsGroup" placeholder="--顶级分类---">
                        <el-option label="日化用品" value="日化用品"></el-option>
                        <el-option label="食品" value="食品"></el-option>
                        </el-select>
                    </el-form-item>
                    <!-- 分类名称 -->
                    <el-form-item label="分类名称" prop="className"><br>
                        <el-input type="text" v-model="goodsForm.className" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- 选择按钮 -->
                      <el-radio-group v-model="goodsForm.radio"><br><br>
                        <el-radio :label="1">禁用</el-radio>
                        <el-radio :label="2">启用</el-radio>
                      </el-radio-group>
                   
                    <!-- 按钮 -->
                    <el-form-item>
                        <el-button type="primary" @click="add('goodsForm')">添加</el-button>
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
      goodsForm: {
        goodsGroup: "",
        className: ""
      },
      rules: {
        goodsGroup: [
          { required: true, message: "请选择分组", trigger: "blur" },
        ],
        className:[
            {required: true, message: "请输入分组名", trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    add() {
      this.$router.push("/ClassifiedManagement");
    }
  }
};
</script>
<style lang="less">
.addclass {
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
          .el-form-item {
            margin-top: 20px;
            .el-form-item__content {
              margin-left: -84px !important;
              .el-input {
                .el-input__inner {
                  width: 250px;
                  margin-top: 10px;
                }
              }
              .el-button--primary {
                margin-left: -24px;
              }
            }
          }
          .el-radio-group {
            margin-left: -200px;
          }
        }
      }
    }
  }
}
</style>
