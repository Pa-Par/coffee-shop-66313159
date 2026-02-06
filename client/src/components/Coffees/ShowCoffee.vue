<template>
    <div>
        <h1>Show Menus</h1>
        <div v-if="menus">
            <p>ID: {{ menus.id }}</p>
            <p>Name: {{ menus.name }}</p>
            <p>Price: {{ menus.price }}</p>
            <p>Type: {{ menus.type }}</p>
            <p>Description: {{ menus.description }}</p>
            <hr>
            <button v-on:click="goBack">ย้อนกลับ</button>
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
            let coffeeId = this.$route.params.coffeeId
            this.menus = (await CoffeesService.show(coffeeId)).data
        } catch (error) {
            console.log (error)
        }
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'coffees' }) 
        }
    }
}
</script>

<style scoped>
</style>