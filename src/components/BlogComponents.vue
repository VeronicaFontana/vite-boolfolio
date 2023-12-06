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
    <ul>
        <li v-for="project in store.projects" :key="project.id" >
            <p class="title">{{ project.name }}</p>
        </li>
    </ul>
</template>


<style lang="scss" scoped>

</style>