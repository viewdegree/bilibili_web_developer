<!--
 * @Author: your name
 * @Date: 2020-02-22 08:12:40
 * @LastEditTime: 2020-02-22 11:38:03
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
              <el-button @click="edit(scope.row._id)" type="text" size="small">查看</el-button>
              <el-button @click="remove(scope.row._id)" type="text" size="small">编辑</el-button>
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
      edit(){

      },
      remove(id){
        this.$http.delete(`articles/${id}`).then(()=>{
           this.$message({
                message: '文章删除成功',
                type: 'success'
            });
        })
      }
    },
    created(){
      this.$http.get('articles').then(res=>{
        //从后端接收到文章的数据
        this.articles = res.data
      })
    }
}
</script>

<style>

</style>
