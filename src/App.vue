<script>
import Header from './components/partials/Header.vue';


export default{
  name: "App",
  data(){
    return{
      
    }
  },
  components:{
    Header
  }
}

</script>

<template>

    <Header />
    <div class="main-wrapper">
      <RouterView />
    </div>

</template>

<style lang="scss">

.main-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

</style>
