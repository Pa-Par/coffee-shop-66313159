<template>
    <div>
        <h2>Coffee Menus</h2>
        <h4>จำนวนเมนูทั้งหมด: {{ coffees.length }}</h4>
        <button v-on:click="navigateTo('/coffee/create')">เพิ่มเมนูใหม่</button>
        <hr>
        <div v-for="coffee in coffees" v-bind:key="coffee.id">
            <p>ID: {{ coffee.id }}</p>
            <p>Name: {{ coffee.name }}</p>
            <p>Price: {{ coffee.price }}</p>
            <p>Type: {{ coffee.type }}</p>
            <p>
                <button v-on:click="navigateTo('/menu/' + coffee.id)">ดูรายละเอียด</button>
                <button v-on:click="navigateTo('/coffee/edit/' + coffee.id)">แก้ไข</button>
                <button v-on:click="deleteCoffee(coffee)">ลบข้อมูล</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import CoffeesService from '@/services/CoffeesService'

export default {
    data() {
        return {
            coffees: []
        }
    },

    async created() {
        try {
            this.menus = (await UsersService.index()).data
            console.log(this.menus)
        } catch (error) {
            console.log(error)
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteUser(user) {
            let result = confirm("คุณต้องการลบเมนู " + coffee.name + " ใช่หรือไม่?")
            if (result) {
                try {
                    await UsersService.delete(user)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            try {
                this.menus = (await UsersService.index()).data
            } catch (err) {
                console.log(err)
            }
        },
    }
}
</script>

<style scoped></style>