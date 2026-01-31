<template>
  <div>
    <h1>Edit Menu</h1>
    <form v-on:submit.prevent="editMenu">
      <p>MenuID: <input type="text" v-model="user.id"></p>
      <p>Name: <input type="text" v-model="user.name"></p>
      <p>Price: <input type="text" v-model="user.price"></p>
      <p>Type: <input type="text" v-model="user.type"></p>
      <p><button type="submit">edit user</button></p>
    </form>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  data() {
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
    async editUser() {
      try {
        await UsersService.put(this.user)
        this.$router.push({
          name: 'users'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped></style>

<script>
import UsersService from '@/services/UsersService'

export default {
  data() {
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
    async editUser() {
      try {
        await UsersService.put(this.user)
        this.$router.push({
          name: 'users'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
<style scoped></style>