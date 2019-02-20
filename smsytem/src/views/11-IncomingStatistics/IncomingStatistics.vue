<template>
    <div class="IncomingStatistics">
        <div class="statisticalManage">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">进货数据统计</span>
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
                    <!-- 查询按钮 -->
                    <el-row>
                     <el-button type="success">查询</el-button>
                    </el-row>
                </div>
            </div>
       </el-card>
    </div> 
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
        value7: ''
        
      }
      
      
    }
    
}
</script>
<style lang="less">
.IncomingStatistics{
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
                      .el-row{
                          float:right;
                          margin-right:450px;
                      }
                  }
                  
              }
          }
      }
}

</style>