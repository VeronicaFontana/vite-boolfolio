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
            <div>
                <em>{{ project.tecnology?.name }}</em>
                <strong v-for="tecnology in project.tecnologies" :key="tecnology.id" >{{ tecnology.name }}</strong>
            </div>
        </li>
    </ul>
</template>


<style lang="scss" scoped>

</style>