<template>
    <div class="statisticalManage">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">销售数据统计</span>
            </div>
            <div class="text item">
                <div class="block">
                    <!-- 时间起止表 -->
                    <span class="demonstration">时间：</span>
                    <el-date-picker
                    v-model="value6"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                    <!-- 选择框 -->
                    <el-select v-model="value" placeholder="销售情况统计">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <!-- 提交按钮 -->
                    <el-row>
                     <el-button type="success">提交</el-button>
                    </el-row>
                </div>
                
            </div>
       </el-card>
    </div> 
</template>
<script>
export default {
    data() {
      return {
          pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
      
      
    },
    methods:{
        
    },
    
};
</script>

<style lang="less">
.el-main {
  .statisticalManage {
      .el-card{
          .el-card__header{
              background:#ccc;
              text-align:left;
              font-size:20px;
              font-weight:600;
          };
          .el-card__body{
              .text{
                  .block{
                      text-align:left;
                      .el-input{
                          width:130px;
                          margin-left:8px;
                      };
                      .el-row{
                          float:right;
                          margin-right:320px;
                      }
                  }
                  
              }
          }
      }
  }
}
</style>