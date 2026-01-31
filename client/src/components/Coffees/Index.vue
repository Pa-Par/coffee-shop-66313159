<template>
    <div>
        <h2>Get all menus</h2>
        <h4>จำนวนเมนู {{ menus.length }}</h4>
        <div v-for="menus in menus" v-bind:key="menus.id">
            <p>ID: {{ menus.id }}</p>
            <p>Name: {{ menus.name }}</p>
            <p>Price: {{ menus.price }}</p>
            <p>Type: {{ menus.type }}</p>
            <p>
                <button v-on:click="navigateTo('/menus/' + menus.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/menus/edit/' + menus.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteUser(menus)">ลบข้อมูล</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import UsersService from '../../services/CoffeesService'

export default {
    data() {
        return {
            menus: []
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
        let result = confirm("Want to delete?")
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