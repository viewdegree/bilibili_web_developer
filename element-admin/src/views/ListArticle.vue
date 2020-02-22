<!--
 * @Author: your name
 * @Date: 2020-02-22 08:12:40
 * @LastEditTime: 2020-02-22 08:34:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \element-admin\src\views\ListArticle.vue
 -->
<template>
    <div>
      <!-- data是指数据 -->
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
}
</script>

<style>

</style>
