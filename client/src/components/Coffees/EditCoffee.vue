<template>
  <div>
    <h1>Edit Menu</h1>
    <form v-on:submit.prevent="editCoffee">
      <p>MenuID: <input type="text" v-model="coffee.id" readonly></p>
      <p>Name: <input type="text" v-model="coffee.name"></p>
      <p>Price: <input type="number" v-model="coffee.price"></p>
      <p>Type:
        <select v-model="coffee.type">
          <option value="hot">Hot</option>
          <option value="iced">Iced</option>
          <option value="frappe">Frappe</option>
        </select>
      </p>
      <p>Status:
        <select v-model="coffee.status">
          <option value="in_stock">มีจำหน่าย</option>
          <option value="out_of_stock">หมด</option>
        </select>
      </p>
      <p>Description: <br>
        <textarea v-model="coffee.description" rows="4" cols="30"></textarea>
      </p>
      <p>
        <button type="submit">บันทึกการแก้ไข</button>
        <button v-on:click="navigateTo('/coffees')">กลับ</button>
      </p>
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
        status: '',
        description: ''
      }
    }
  },
  methods: {
    async editCoffee() {
      try {
        await CoffeesService.put(this.coffee)
        this.$router.push({
          name: 'coffees'
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