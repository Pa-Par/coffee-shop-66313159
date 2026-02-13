<template>
    <div>
        <h1>Create Coffee Menu</h1>
        <form v-on:submit.prevent="createCoffee">
            <p>Name: <input type="text" v-model="coffee.name" required></p>
            <p>Price: <input type="number" v-model="coffee.price" required></p>
            <p>Type:
                <select v-model="coffee.type">
                    <option value="hot">ร้อน</option>
                    <option value="iced">เย็น</option>
                    <option value="frappe">ปั่น</option>
                </select>
            </p>
            <p>Status:
                <select v-model="coffee.status">
                    <option value="in_stock">มีจำหน่าย</option>
                    <option value="out_of_stock">หมด</option>
                </select>
            </p>
            <p>Description: <textarea v-model="coffee.description"></textarea></p>
            <p><button type="submit">Create Menu</button></p>
            <p><button v-on:click="navigateTo('/coffees')">กลับ</button></p>
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
                status: 'in_stock',
                description: ''
            }
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
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