<template>
	<el-tree
	  :data="items"
	  :props="defaultProps"
	  node-key="id"
	  default-expand-all
		:render-content="renderContent"
	  :expand-on-click-node="false">
	</el-tree>
</template>



<script>
export default {
	data() {
    return {
      items: []
    }
	},
	mounted(){
		this.getItems()
	},
	methods : {
		getItems() {
			//console.log(this.api.menu)
			this.$http.get(this.api.menu).then(response => {
				// 这里是处理正确的回调
				this.items = response.data
			}, response => {
				// 这里是处理错误的回调
				console.log(response)
			});
		},
    remove(store, data) {
      store.remove(data);
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
