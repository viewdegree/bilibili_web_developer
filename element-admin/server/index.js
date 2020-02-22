/*
 * @Author: your name
 * @Date: 2020-02-22 09:20:33
 * @LastEditTime: 2020-02-22 11:33:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\server\index.js
 */
const express = require('express')
const app = express();

// 允许跨域
app.use(require('cors')())
// 识别用户提交过来的json
app.use(express.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/element-admin',{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})
const Article = mongoose.model('Article', new mongoose.Schema({
    title: {type:String},
    body:  {type:String}
}))

app.get('/',async(req, res)=>{
    res.send('index')
}); 

//新增文章 根据restful风格 资源 方法
app.post('/api/articles', async(req, res)=>{
    const article = await Article.create(req.body);
    res.send(article)
})
//文章列表
app.get('/api/articles',async(req,res)=>{
    const articles = await Article.find();
    res.send(articles)    
})
//删除文章
app.delete('/api/articles/:id',async(req,res)=>{
    await Article.findByIdAndDelete(req.param.id)
    res.send({
        status: true
    })
})

app.listen(3001,()=>{ 
    console.log('http://localhost:3001/');
})