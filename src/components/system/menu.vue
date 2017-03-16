<template>
	<div>
		<el-form :inline="true" :model="insert">
		<el-form-item label="所属上级菜单">
			<el-select v-model="insert.ownid">
				<el-option label="作为顶级菜单" value="0"></el-option>
				<el-option v-for="item in items" :label="item.label" :value="item.id" :key="item.id"></el-option>
			</el-select>
		</el-form-item>
		  <el-form-item label="">
		    <el-input v-model="insert.label" placeholder="菜单名"></el-input>
		  </el-form-item>
			<el-form-item>
		    <el-button type="primary" @click="saveItems">添加新菜单</el-button>
		  </el-form-item>
		</el-form>

		<el-tree
		  :data="items"
		  node-key="id"
		  default-expand-all
			:render-content="renderContent"
		  :expand-on-click-node="false">
		</el-tree>
	</div>
</template>



<script>
export default {
	data() {
    return {
      items: [],
      insert: {
        label: '',
        ownid: '0',
      }
    }
	},
	mounted(){
		this.getItems()
	},
	methods : {
		saveItems(){
			let data = {
				ownid : this.insert.ownid,
				label : this.insert.label
			}
			this.$http.post(this.api.menusave,data,{
				emulateJSON:true
			}).then(res => {
				this.items = res.data
			},res => {
				console.log(res)
			});
		},
		getItems() {
			this.$http.get(this.api.menu).then(res => {
				this.items = res.data
			}, res => {
				console.log(res)
			});
		},


    remove(store, data) {
      this.$confirm('确认要删除吗?', '提示', {
				//type: 'warning'
			}).then(() => {
				//数据删除
				this.$http.post(this.api.menudelete,{id:data.id},{
					emulateJSON:true
				}).then(res => {
					this.items = res.data
				},res => {
					console.log(res)
				});
				//页面删除
      	store.remove(data);
        this.$message({
          type: 'success',
          message: '已经删除!'
        });
			}).catch(() => {

			});
    },


    renderContent(h, { node, data, store }) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span style="margin-left:20px">
            <el-button size="mini" type="danger" on-click={ () => this.remove(store, data) }>删除</el-button>
          </span>
        </span>
			);
    }
	}
}
</script>


<style>

</style>
