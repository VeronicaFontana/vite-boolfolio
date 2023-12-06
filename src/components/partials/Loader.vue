<script>
export default {
    name: 'Loader',
    props:{
        title: String
    }
}
</script>


<template>
    <div class="text-center py-5">
        <h4 class="my-5">{{ title }}</h4>
        <div class="lds-hourglass"></div>

    </div>
</template>

<style lang="scss">



</style>