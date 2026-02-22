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

      <p v-if="coffee.pictures && coffee.pictures !== 'null'">
        <label>รูปภาพปัจจุบัน:</label><br>
        <img :src="'http://localhost:8081/assets/uploads/' + coffee.pictures" alt="Coffee Image"
          style="max-width: 200px; border-radius: 10px;">
      </p>
      <upload-image @uploaded="onUploaded"></upload-image>
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
import UploadImage from '../Utils/Upload.vue'

export default {
  components: { UploadImage },
  data() {
    return {
      coffee: {
        name: '',
        price: 0,
        type: '',
        status: '',
        pictures: '',
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
    },
    
    onUploaded(filename) {
      this.coffee.pictures = filename
    },

    navigateTo(route) {
      this.$router.push(route)
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