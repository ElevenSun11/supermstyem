//商品管理模块
const express = require('express');
const router = express.Router();

//引入连接数据库的模块
const connection = require('./connect');

//统一设置响应头 解决跨域问题
router.all('*',(req,res,next) => {
  //设置响应头 解决跨域
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

//添加商品路由 /goodsadd
router.post('/goodsadd',(req,res) => {
  let {barcode,goodsname,classname,saleprice,marketprice,costprice} = req.body;

  //把数据存入数据库
  //构造sql语句
  const sqlStr = `insert into goodsmanage(barcode,goodsname,classname,saleprice,marketprice,costprice) values('${barcode}','${goodsname}','${classname}','${saleprice}','${marketprice}','${costprice}')`;
  //执行sql语句
  connection.query(sqlStr,(err,data) => {
    if(err) throw err;
    //判断受影响的行数
    if(data.affectedRows > 0) {
      //如果大于0 代表插入成功 那么就给前端返回成功的数据对象
      res.send({"error_code":0,"reason":"插入数据成功"});
    } else {
      //失败返回前端失败的数据对象
      res.send({"error_code":1,"reason":"插入数据失败"})
    }
  })
})



//按分页显示商品列表的路由
router.get('/goodslistbypage',(req,res) => {
  //接收前端参数
  let {pageSize,currentPage} = req.query;

  //默认值
  pageSize = pageSize ? pageSize : 3;
  currentPage = currentPage ? currentPage : 1;

  //构造sql语句
  let sqlStr = `select * from goodsmanage order by barcode desc`;
  //执行sql语句
  connection.query(sqlStr,(err,data) => {
    if(err) throw err;
    //计算数据总条数
    let total = data.length;

    //分页条件
    let n = (currentPage - 1) * pageSize;
    //拼接分页的sql语句
    sqlStr += ` limit ${n},${pageSize}`;

    //执行sql语句
    connection.query(sqlStr,(err,data) => {
      if(err) throw err;
      // 把数据返回给前端 两个数据 数据总条数 total 和 对应页码的数据 data
      res.send({
        total,
        data
      })
    })
  })
})


//删除商品请求的路由
router.get('/goodsdel',(req,res) => {
  //接收id
  let {id} = req.query;
  //根据id执行删除
  //构造删除数据的sql语句
  const sqlStr = `delete from goodsmanage where id = ${id}`;
  console.log(sqlStr)
  //执行sql语句
  connection.query(sqlStr,(err,data) => {
     if(err) throw err;
     //根据删除结果判断
     console.log(data)
     if(data.affectedRows > 0) {
       //如果受影响行数大于0 删除成功 返回成功的数据对象给前端
       res.send({"error_code": 0,"reason":"删除商品成功"});
     } else {
       //否则删除失败 返回失败的数据对象给前端
       res.send({"error_code":1,"reason":"删除商品失败"})
     }
   })
})
module.exports = router;