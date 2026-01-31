<template>
    <div>
        <h1>Show Menus</h1>
        <div v-if="menus">
            <p>ID: {{ menus.id }}</p>
            <p>Name: {{ menus.name }}</p>
            <p>Price: {{ menus.price }}</p>
            <p>Type: {{ menus.type }}</p>
        </div>
    </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
    data () {
        return {
            menus: null
        }
    },
    async created () {
        try {
            let menuId = this.$route.params.menuId
            this.menus = (await CoffeesService.show(menuId)).data
        } catch (error) {
            console.log (error)
        }
    }
}
</script>

<style scoped>
</style>