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
            <p><upload-image @uploaded="onUploaded"></upload-image></p>
            <div class="editor-container">
                <label>Description: </label>
                <ckeditor :editor="editor" v-model="coffee.content" :config="editorConfig"></ckeditor>
            </div>
            <p><button type="submit">Create Menu</button></p>
            <p><button v-on:click="navigateTo('/coffees')">กลับ</button></p>
        </form>
    </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadImage from '../Utils/Upload.vue'

export default {
    components: {
        UploadImage
    },
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
                licenseKey: 'GPL',
                toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote']
            },
            coffee: {
                name: '',
                price: 0,
                type: '',
                status: 'in_stock',
                pictures: 'null',
                content: '',
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
        },
        onUploaded(filename) {
            this.coffee.pictures = filename
        }
    }
}
</script>
<style scoped>
.editor-wrapper {
    text-align: left;
}

:deep(.ck-editor__editable) {
    min-height: 300px;
}
</style>