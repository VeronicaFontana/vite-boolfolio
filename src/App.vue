<script>

import axios from "axios";
import {store} from "./data/store";
import BlogComponents from "./components/BlogComponents.vue";
import Loader from './components/partials/Loader.vue';

export default{
  name: "App",
  components:{
    BlogComponents,
    Loader
  },
  data(){
    return{
      isLoaded: false
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + "projects")
        .then(results =>{
          this.isLoaded = true;
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
    <Loader v-if="!isLoaded" />
    
    <div v-else>
      <BlogComponents />
    </div>
    
  </div>

</template>

<style lang="scss">

</style>
