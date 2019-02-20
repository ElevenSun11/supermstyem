<template>
  <div class="goodsManage">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">商品管理</span>
      </div>
      <div class="text item">

            <!-- 搜索 -->
            <div>
              <!-- 设置 inline 属性可以让表单域变为行内的表单域 -->
              <el-form :inline="true" :model="formSearch" class="demo-form-inline">
                <el-form-item label="所属分类">
                  <el-select v-model="formSearch.classname" placeholder="请选择分类">
                    <el-option label="日用品" value="日用品"></el-option>
                    <el-option label="零食" value="零食"></el-option>
                    <el-option label="酒水" value="酒水"></el-option>
                    <el-option label="饮料" value="饮料"></el-option>
                    <el-option label="服装" value="服装"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="关键词">
                  <el-input id="keywords" v-model="formSearch.keywords" placeholder="查询商品名称、条形码"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="success" @click="onSearch()" icon="el-icon-search">查询</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div id="searchBox"></div>
            <!-- 管理列表 -->
            <div>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column label="商品条码">
                  <template slot-scope="scope">
                    {{ scope.row.barcode }}
                  </template>
                </el-table-column>

                <el-table-column label="商品名称">
                  <template slot-scope="scope">
                    {{ scope.row.goodsname }}
                  </template>
                </el-table-column>

                <el-table-column label="所属分类">
                  <template slot-scope="scope">
                    {{ scope.row.classname }}
                  </template>
                </el-table-column>

                <el-table-column label="售价">
                  <template slot-scope="scope">
                    {{ scope.row.saleprice }}
                  </template>
                </el-table-column>

                <el-table-column label="市场价">
                  <template slot-scope="scope">
                    {{ scope.row.marketprice }}
                  </template>
                </el-table-column>

                <el-table-column label="成本价">
                  <template slot-scope="scope">
                    {{ scope.row.costprice }}
                  </template>
                </el-table-column>

                <el-table-column label="操作" width="180">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                      <i class="el-icon-edit"></i> 编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                      <i class="el-icon-delete"></i>删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <!-- 分页 -->
            <!-- 设置background属性可以为分页按钮添加背景色。 -->
            <div id="pagerBox">
              <el-pagination 
              @size-change="handleSizeChange" 
              @current-change="handleCurrentChange" 
              :current-page="currentPage" 
              :page-sizes="[1,2,3,5,10,20,50,100]" 
              :page-size="pageSize" 
              layout="total, sizes, prev, pager, next, jumper"  
              :total="total">
              </el-pagination>
            </div>
          </div>
   </el-card>
  </div>
</template>

<script>
//引入moment模块
import moment from 'moment';
//引入qs模块
import qs from 'qs';
export default {
  data() {
    return {
      centerDialogVisible:false,
      currentPage: 1, //默认值在第一页
      pageSize: 3, //每页五条数据
      total: 0, //总记录数量
      // 查询的表单
      formSearch: {
        classname: "",
        keywords: ""
      },
      tableData: [],//

      ruleForm: {//
        username: ""//
      },
      rules: {
        addclassify: [
          { required: true, trigger: "blur", message: "请选择分类" }//
        ],
        barcode: [
          { required: true, trigger: "blur", message: "请点击生成条形码" }//
        ]
      }
    };
  },
  // 生命周期的钩子函数 created 自动触发 vue组件实例对象创建完成 dom还没有绑定 这个函数里面适合发送ajax请求 获取数据
  created() {
    // 自动发送请求 获取所有用户账号数据 （只要一进入这个组件 就自动发送请求）
    this.getGoodsListByPage();
  },
  methods: {//
    getGoodsListByPage(){
      //收集当前页码 和每页显示条数
      let pageSize = this.pageSize;
      let currentPage = this.currentPage;

      //发送ajax请求 把分页数据发送给后端
      this.axios.get('http://127.0.0.1:3000/goodsmanage/goodslistbypage',{
        params:{
          pageSize,//
          currentPage//
        }
      })
        .then(response => {
          //接收后端返回的数据总条数 total 和对应页码的数据 data
          let {total,data} = response.data;//
          
          //赋值给对应的变量
          this.total = total;//
          this.tableData = data;//

          //如果当前页没有数据 且 排除第一页
          if(!data.length && this.currentPage !== 1) {
            //页码减去1
            this.currentPage -= 1;//
            //再调用自己
            this.getGoodsListByPage();//
          }
        })
         .catch(err => {
           console.log(err)//
         })
    },
    // 每页显示条数改变 就会触发这个函数
    handleSizeChange(val) {
      // 保存每页显示的条数
      this.pageSize = val;
      // 调用分页函数
      this.getGoodsListByPage();
    },
    // 当前页码改变 就会触发这个函数
    handleCurrentChange(val) {
      // 保存当前页码
      this.currentPage = val;
      // 调用分页函数
      this.getGoodsListByPage();
    },


    handleEdit(index, row) {
      this.ruleForm2 = row;//
      this.centerDialogVisible = true;//

    },
    //删除商品函数
    handleDelete(id){
      //确认框//
      this.$confirm("你确定要删除吗？","删除提示",{//
        confirmButtonText: "确定",//..//
        cancelButtonText: "取消",//
        type: "warning"///
      })
        //如果确定 就执行then
        .then(() => {
          //发送ajax 把id传给后端
          this.axios
              .get(`http://127.0.0.1:3000/goodsmanage/goodsdel?id=${id}`)
              .then(response => {
                //接收后端返回的错误码 和 提示信息
                let {error_code,reason} = response.data;
                console.log(response.data);
                //判断
                if(error_code === 0) {
                  //弹出删除成功的提示
                  this.$message({
                    type:"success",
                    message:reason
                  });
                  //刷新列表
                  this.getGoodsListByPage();
                } else {
                  //弹出删除失败提示
                  this.$message.error(reason);
                }
              })
               .catch(err => {
                 console.log(err);
               });
        })
        //如果取消 就执行catch
        .catch(() => {
          //弹出取消删除提示
          this.$message({
            type:"info",
            message:"已取消删除"
          });
        });
    },


    

    //查询按钮执行的方法
    onSearch() {
      console.log("搜索的分类和关键词", this.formSearch);
      //点击搜索按钮就把 商品分类和关键词 发送到后端api
     
    },
    
    //定义方法  市场价是商品售价的1.2倍 售价是进价的5倍
    calcJG() {
      let v = this;
      v.ruleForm.saleprice = (v.ruleForm.costprice * 5).toFixed(2);
      v.ruleForm.marketprice = (1.2 * v.ruleForm.saleprice).toFixed(2);
    },
    //定义条形码方法
    onSubmit() {
      this.ruleForm.barcode = new Date().getTime();
    },
    

  },
  //   mounted(){
    
  // },
  // created() {
    
  //   this.username = this.$route.query.username;
  // },
  //过滤器
  // filters:{
  //   //过滤时间的函数
  //   filterCtime(ctime) {
  //     return moment(ctime).format("YYYY/MM/DD HH:mm:ss");
  //   }
  // }
};
</script>


<style lang="less">
.goodsManage{
  .el-card{
    .el-card__header{
      background:#ccc;
      font-size:20px;
      font-weight:600;
      text-align:left;
    };
    .el-card__body{
      .text{
        .el-form{
          text-align:left;
        };
        .el-pagination{
          text-align:left;
          margin-top:6px;
        }
      }
    }
  }
}
    

</style>
