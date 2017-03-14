<template>
	<div class="module">
		{{ $route.params.subject }}
		{{ $route.path }}
	</div>
</template>



<script>
export default{
	data(){
		return {
			test : "asdfsdf"
		}
	},
	mounted(){
		this.foo();
	},
	methods : {
		foo(){
			//alert(this.test);
		}
	}
}
</script>





<style>

</style>
