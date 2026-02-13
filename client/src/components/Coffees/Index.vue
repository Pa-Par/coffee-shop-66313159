<template>
    <div>
        <h2>Coffee Menus</h2>
        <p><button v-on:click="logout">Logout</button></p>
        <h4>จำนวนเมนูทั้งหมด: {{ coffees.length }}</h4>
        
        <p><button v-if="userType === 'admin'" v-on:click="navigateTo('/coffee/create')">
            เพิ่มเมนูใหม่
        </button></p>
        
        <hr>
        <div v-for="coffee in coffees" v-bind:key="coffee.id">
            <p>ID: {{ coffee.id }}</p>
            <p>Name: {{ coffee.name }}</p>
            <p>Price: {{ coffee.price }}</p>
            <p>Type: {{ coffee.type }}</p>
            <p>Status: {{ coffee.status === 'in_stock' ? 'มีจำหน่าย' : 'หมด' }}</p>
            <p>
                <button v-on:click="navigateTo('/coffee/' + coffee.id)">ดูรายละเอียด</button>
                <span v-if="userType === 'admin'">
                    <button v-on:click="navigateTo('/coffee/edit/' + coffee.id)">แก้ไข</button>
                    <button v-on:click="deleteCoffee(coffee)">ลบข้อมูล</button>
                </span>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'
import { useAuthenStore } from '../../stores/authen'

export default {
    data() {
        return {
            coffees: []
        }
    },
    
    computed: {
        userType() {
            const authenStore = useAuthenStore()
            return authenStore.user ? authenStore.user.type : null
        }
    },

    async created() {
        try {
            this.coffees = (await CoffeesService.index()).data
            console.log(this.coffees)
        } catch (error) {
            console.log(error)
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteCoffee(coffee) {
            let result = confirm("คุณต้องการลบเมนู " + coffee.name + " ใช่หรือไม่?")
            if (result) {
                try {
                    await CoffeesService.delete(coffee)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            try {
                this.coffees = (await CoffeesService.index()).data
            } catch (err) {
                console.log(err)
            }
        },
        logout () {
            const authenStore = useAuthenStore()
            authenStore.logout()
            
            this.$router.push({
                name: 'login'
            })
        },
    }
}
</script>
<style scoped></style>