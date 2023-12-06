<script>

import axios from "axios";
import {store} from "./data/store";

export default{
  name: "App",
  data(){
    return{
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + "projects")
        .then(results =>{
          console.log(results.data);
        })
    }
  },
  mounted(){
    this.getApi();
  }
}

</script>

<template>

  <div>
    <h1>Prova</h1>
  </div>

</template>

<style lang="scss">

</style>
