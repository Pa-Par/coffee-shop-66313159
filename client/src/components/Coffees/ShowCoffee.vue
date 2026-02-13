<template>
    <div>
        <h1>Show Menus</h1>
        <div v-if="menus">
            <p>ID: {{ menus.id }}</p>
            <p>Name: {{ menus.name }}</p>
            <p>Price: {{ menus.price }}</p>
            <p>Type: {{ menus.type }}</p>
            <p>Status: {{ menus.status === 'in_stock' ? 'มีจำหน่าย' : 'หมด' }}</p>
            <p>Description: {{ menus.description }}</p>
            <hr>
            <p>
                <button v-on:click="navigateTo('/coffee/edit/' + menus.id)">แก้ไขเมนู</button>
                <button v-on:click="navigateTo('/coffees')">กลับ</button>
            </p>
        </div>
    </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
    data() {
        return {
            menus: null
        }
    },
    async created() {
        try {
            let coffeeId = this.$route.params.coffeeId
            this.menus = (await CoffeesService.show(coffeeId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        goBack() {
            this.$router.push({ name: 'coffees' })
        }
    }
}
</script>

<style scoped></style>