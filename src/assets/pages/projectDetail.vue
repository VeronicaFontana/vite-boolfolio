<script>
import axios from 'axios';
import { store } from '../../data/store';
import Loader from '../../components/partials/Loader.vue';

export default{
    name: "projectDetail",
    data(){
        return{
            post:{},
            isLoaded: false
        }
    },
    components:{
        Loader
    },
    methods: {
        getProject(slug){
            axios.get(store.apiUrl + 'projects/get-project/' + slug )
            .then(res => {
                if(!res.data.success){
                this.$router.push({ name: 'error-404' })
                }
                this.isLoaded = true;
                this.project = res.data.project;
            })
        }
        },
        mounted() {
        this.getProject(this.$route.params.slug);
        },
        computed: {
        typesList(){
            return this.project.types?.map(type => type.name).join(', ') || 'NO TIPOLOGIA';
        }
    }
}

</script>

<template>

    <Loader v-if="!isLoaded" />
    <div v-else>
        <h1>{{ project.name }}</h1>
        <p>Tecnologia: {{ project.tecnology?.name || ' NO TECNOLOGIA '  }} | Tipologia: {{ typesList }}</p>
        <p>{{ project.description }}</p>
    </div>

</template>

<style lang="scss">

</style>