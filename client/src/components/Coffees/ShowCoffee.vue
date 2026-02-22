<template>
    <div>
        <h1>Show Menu</h1>
        <div v-if="coffee">
            <p>ID: {{ coffee.id }}</p>
            <p>Name: {{ coffee.name }}</p>
            <p>Price: {{ coffee.price }}</p>
            <p>Type: {{ coffee.type }}</p>
            <p>Status: {{ coffee.status === 'in_stock' ? 'มีจำหน่าย' : 'หมด' }}</p>

            <p v-if="coffee.pictures && coffee.pictures !== 'null'">
                <img :src="'http://localhost:8081/assets/uploads/' + coffee.pictures"
                    style="max-width: 300px; border-radius: 10px;">
            </p>

            <p>Description: <span v-html="coffee.description"></span></p>
            <hr>
            <p>
                <button v-on:click="navigateTo('/coffee/edit/' + coffee.id)">แก้ไขเมนู</button>
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
            coffee: null
        }
    },
    async created() {
        try {
            let coffeeId = this.$route.params.coffeeId
            this.coffee = (await CoffeesService.show(coffeeId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style scoped></style>