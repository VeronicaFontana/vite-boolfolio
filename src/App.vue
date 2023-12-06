<script>

import axios from "axios";
import {store} from "./data/store";
import BlogComponents from "./components/BlogComponents.vue";

export default{
  name: "App",
  components:{
    BlogComponents
  },
  data(){
    return{
      
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + "projects")
        .then(results =>{
          store.projects = results.data;
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
    <BlogComponents />
  </div>

</template>

<style lang="scss">

</style>
