<!--
 * @Author: your name
 * @Date: 2020-02-22 08:12:54
 * @LastEditTime: 2020-02-22 11:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\src\views\CreateArticle.vue
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
        <el-button type="primary" native-type="submit">立即创建</el-button>
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
        //点击提交会自动触发打印出article的数据对象,从控制台可以看出这是对象属性是双向绑定的值,所以我们再后续操作的时候直接将article值提交给服务端,服务端根据这个数据对象保存到数据库中去,之后前端再自动跳转一下到文章列表页就完成了,整个数据提交的功能
        //利用axios去请求接口
        this.$http.post('articles',this.article).then(res=>{
            //服务器返回给前端的数据
            console.log(res.data);
            //弹出消息提示
            this.$message({
                message: '文章创建成功',
                type: 'success'
            });
            //跳转到页面
            this.$router.push('/articles/index')
        })
        console.log(this.article);
      }
    }
  }
</script>
 
