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
        <div class="card" style="width: 18rem;" v-for="project in store.projects" :key="project.id">
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">{{ project.description }}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ project.creation_date }}</li>
            </ul>
            <div>
                <em>{{ project.type?.name }}</em>
                <strong v-for="tecnology in project.tecnologies" :key="tecnology.id" >{{ tecnology.name }}</strong>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>