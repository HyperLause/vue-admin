<template>
  <div class="test">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Test'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
