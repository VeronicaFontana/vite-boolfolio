<script>
import { store } from '../data/store';

export default {
    name: 'BlogComponents',
    data() {
        return {
            store
        }
    },
    components:{},
    methods: {},
    mounted() {},
    computed: {}  
}
</script>

<template>
    <h1>I progetti</h1>
    <div>
        <ul>
            <li v-for="project in store.projects" :key="project.id" >
            <router-link :to="{name: 'projectDetail', params:{slug: project.slug}}"  class="name">{{ project.name }}</router-link>
            <div>
                <em>{{ project.tecnology?.name }}</em>
                <strong v-for=" type in project.type " :key="type.id"> {{ type.name }}</strong>
            </div>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>

</style>