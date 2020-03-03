<template>
  <div>
    <h2>{{result}}</h2>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "HelloWorld",
      data() {
        return {
          result: ''
        }
      },
      created() {
        axios({
          url: 'http://123.207.32.32:8000/home/multidata'
        }).then(res => {
          console.log(res);
          this.result = res
        })
      }
    }
</script>

<style scoped>

</style>
