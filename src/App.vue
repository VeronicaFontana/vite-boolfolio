<script>

import axios from "axios";
import {store} from "./data/store";
import BlogComponents from "./components/BlogComponents.vue";
import Loader from './components/partials/Loader.vue';
import Navigator from "./components/partials/Navigator.vue";
import Header from "./components/partials/Header.vue";

export default{
  name: "App",
  components:{
    BlogComponents,
    Loader,
    Navigator,
    Header
  },
  data(){
    return{
      isLoaded: false,
      paginator:{
        links: [],
        firstPageUrl:'',
        lastPageUrl:'',
        currentPage:'',
        lastPage:'',
      }
    }
  },
  methods:{
    getApi(endpoint){
      this.isLoaded = false;
      axios.get(endpoint)
        .then(results =>{
          this.isLoaded = true;
          store.projects = results.data.data;
          this.paginator.links = results.data.links;
          this.paginator.firstPageUrl = results.data.first_page_url;
          this.paginator.lastPageUrl = results.data.last_page_url;
          this.paginator.currentPage = results.data.current_page;
          this.paginator.lastPage = results.data.last_page;
      })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + "projects");
  }
}

</script>

<template>

  <div>
    <Loader v-if="!isLoaded" />
    
    
    <div class="main-wrapper" v-else>
      <Header />

      <RouterView />
      <BlogComponents />
      <Navigator
        :paginator="paginator"
        @callApi="getApi"
      />
    </div>
    
  </div>

</template>

<style lang="scss">

</style>
