<template>
    <div>
        <h1>Create Coffee Menu</h1>
        <form v-on:submit.prevent="createCoffee">
            <p>Name: <input type="text" v-model="coffee.name" required></p>
            <p>Price: <input type="number" v-model="coffee.price" required></p>
            <p>Type:
                <select v-model="coffee.type">
                    <option value="hot">Hot</option>
                    <option value="iced">Iced</option>
                    <option value="frappe">Frappe</option>
                </select>
            </p>
            <p>Description: <textarea v-model="coffee.description"></textarea></p>
            <p><button type="submit">Create Menu</button></p>
        </form>
    </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'

export default {
    data() {
        return {
            coffee: {
                name: '',
                price: 0,
                type: '',
                description: ''
            }
        }
    },
    methods: {
        async createCoffee() {
            try {
                await CoffeesService.post(this.coffee)
                this.$router.push({
                    name: 'coffees'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped></style>