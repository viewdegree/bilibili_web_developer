<!--
 * @Author: your name
 * @Date: 2020-02-22 08:12:40
 * @LastEditTime: 2020-02-22 12:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\src\views\ListArticle.vue
 -->
<template>
    <div>
      <!-- data是指数据 -->
        <el-table :data="articles">
          <el-table-column prop="title" label="标题" width="140">
          </el-table-column>
          <el-table-column prop="body" label="内容" width="220">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <!-- {{scope.row}} -->
              <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
              <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
      return {
        articles: []
      }
    },
    methods:{
      //获取数据
      fetch(){
        this.$http.get('articles').then(res=>{
          //从后端接收到文章的数据
          this.articles = res.data
        })
      },
      edit(id){
        //路由前面必须有斜杠
        this.$router.push(`/articles/${id}/edit`)
      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(()=>{
           this.$message({
                message: '文章删除成功',
                type: 'success'
            });
            //将重新获取数据写到then里面,因为回调的缘故,不能让fetch先执行
            this.fetch();
        });
        //当删除数据完成的时候,需要重新加载页面,不然那删除的数据还停留在未删除的数据页面上,但考虑的减少数据冗余性,将获取数据封装成fetch函数.
      }
    },
    created(){
      this.fetch();
    }
}
</script>

<style>

</style>
