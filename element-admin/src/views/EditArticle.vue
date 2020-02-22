<!--
 * @Author: your name
 * @Date: 2020-02-22 11:54:11
 * @LastEditTime: 2020-02-22 12:13:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\src\views\EditArticle.vue
 -->

 <template>
    <el-form @submit.native.prevent="saveAriticle" ref="form" :model="article" label-width="100px">
    <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
        <el-button>取消</el-button>
    </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        article: {
        }
      }
    },
    methods: {
      saveAriticle() {
        //利用axios去请求接口
        this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res=>{
            //服务器返回给前端的数据
            console.log(res.data);
            //弹出消息提示
            this.$message({
                message: '文章更新成功',
                type: 'success'
            });
            //跳转到页面
            this.$router.push('/articles/index')
        })
        console.log(this.article);
      },
      fetch(){
        //前端路由的信息
        this.$http.get(`articles/${this.$route.params.id}`).then(res=>{
          this.article = res.data;
        })
      }
    },
    created(){
      this.fetch()
    }
  }
</script>
 
