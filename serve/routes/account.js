/**
 * 这是账号管理路由模块
 */
const express = require('express');
const router = express.Router();

// 引入连接数据库模块
const connection = require('./connect')

// 统一设置响应头 解决跨域问题
router.all('*', (req, res, next) => {
  // 设置响应头 解决跨域(目前最主流的方式)
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

/* 
  添加账号的路由 /accountadd
*/
router.post('/accountadd', (req, res) => {
    // 接收前端发送的添加账号的数据
    let { username, password, userGroup } = req.body;
  
    // 把数据存入数据库
    // 构造sql语句
    const sqlStr = `insert into account(username, password, userGroup) values('${username}', '${password}', '${userGroup}')`;
    // 执行sql语句
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 判断受影响的行数
      if (data.affectedRows > 0) {  
        // 如果大于0 代表插入成功 那么就给前端返回成功的数据对象
        res.send({"error_code": 0, "reason":"插入数据成功"});
      } else {
        // 失败：返回给前端失败的数据对象
        res.send({"error_code": 1, "reason":"插入数据失败"});
      }
    })
  })
  /* 
  显示账号列表的路由 /accountlist
*/
router.get('/accountlist', (req, res) => {
    // 查询所有账号数据(按照时间排序)
    // 构造sql语句（查询所有数据且按照时间排序）
    const sqlStr = 'select * from account order by ctime desc';
    // 执行sql语句
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 把查询到的数据响应给前端（是一个数组）
      res.send(data);
    })
  })
  
  /* 
    删除账号请求的路由 /accountdel
  */
  router.get('/accountdel', (req, res) => {
    // 接收id
    let { id } = req.query;
    // 根据id 执行删除
    // 构造删除数据的sql语句
    const sqlStr = `delete from account where id = ${id}`;
    // 执行sql语句
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 根据删除结果判断
      if (data.affectedRows > 0) { 
        // 如果受影响行数大于0 删除成功 返回成功的数据对象给前端
        res.send({"error_code": 0, "reason":"删除账号成功"});
      } else {
        // 否则删除失败 返回失败的数据对象给前端
        res.send({"error_code": 1, "reason":"删除账号失败"});
      }
    })
  })
  
  /* 
    接收修改-数据回填请求： /accountedit
  */
  router.get('/accountedit', (req, res) => {
    // 接收id 
    let { id } = req.query;
    // 构造sql
    const sqlStr = `select * from account where id = ${id}`;
    // 执行sql 
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 把查询的数据返回给前端
      res.send(data);
    })
  })
  
  /* 
    接收修改-保存修改后数据的请求 /saveeditaccount
  */
  router.post('/accounteditsave', (req, res) => {
    // 接收修改后的新数据 和 原来的id
    let { username, usergroup, editId } = req.body;
    // 构造sql
    const sqlStr = `update account set username='${username}', usergroup='${usergroup}' where id=${editId}`;
    // 执行sql
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 受影响行数大于0 就是修改成功
      if (data.affectedRows > 0) {
        // 返回成功的数据对象给前端
        res.send({"error_code": 0, "reason":"修改账号成功"});
      } else {
        // 返回失败的数据对象给前端
        res.send({"error_code": 1, "reason":"修改账号失败"});
      }
    })
  })
  
  /* 
    接收批量删除的路由 /batchdelete
  */
  router.get('/batchdelete', (req, res) => {
    // 接收前端发送过来的 需要删除的id 数一个数组
    let { selectedId } = req.query;
    // 构造sql语句
    const sqlStr = `delete from account where id in (${selectedId})`;
    // 执行sql语句
    connection.query(sqlStr, (err, data) => {
      if (err) throw err;
      // 根据删除结果判断 成功就返回成功的数据对象 否则 就返回失败的数据对象
      if (data.affectedRows > 0) {
        res.send({"error_code": 0, "reason":"批量删除成功"})
      } else {
        res.send({"error_code": 1, "reason":"批量删除失败"})
      }
    })
  })
module.exports = router;