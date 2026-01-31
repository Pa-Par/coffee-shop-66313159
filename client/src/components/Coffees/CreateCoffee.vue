<template>
    <div>
        <h1>Create Menus</h1>
        <form v-on:submit.prevent = "createMenu">
            <p>Name: <input type="text" v-model="menus.name"></p>
            <p>Price: <input type="text" v-model="menus.price"></p>
            <p>Type: <input type="text" v-model="menus.type"></p>
            <p><button type="submit">create menus</button></p>
        </form>
    </div>
</template>

<script> 
import UsersService from '../../services/CoffeesService'

export default {
    data () {
        return {
            user: {
                name: '',
                lastname: '',
                email: '',
                password: '',
                status: 'active'
            }
        }
    },
    methods: {
        async createUser () {
            try {
                await UsersService.post(this.user)
                this.$router.push({
                    name: 'users'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
</style>