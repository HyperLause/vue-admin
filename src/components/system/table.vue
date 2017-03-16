<template>
	<el-table :data="datalist" stripe border style="width: 100%" v-loading="loading" element-loading-text="拼命加载中">
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column prop="date" label="日期" width="120" sortable></el-table-column>
    <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip> </el-table-column>
  </el-table>
</template>



<script>
export default {
	data() {
		return {
			loading : true,
			datalist: []
		}
	},
	mounted(){
		this.getData()
	},
	methods : {
    getData() {
      this.$http.get(this.api.table).then(response => {
        this.datalist = response.data
				this.loading = false
      }, response => {
        console.log(response)
      });
    }
	}
}
</script>


<style>

</style>
