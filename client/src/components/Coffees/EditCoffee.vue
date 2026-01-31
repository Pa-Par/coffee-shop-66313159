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
import CoffeesService from '@/services/CoffeesService'

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
    async editCoffee() {
      try {
        await CoffeesService.put(this.coffee)
        this.$router.push({
          name: 'menus'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let coffeeId = this.$route.params.coffeeId
      this.coffee = (await CoffeesService.show(coffeeId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>