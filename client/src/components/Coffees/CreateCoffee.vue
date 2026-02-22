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
            <upload-image @uploaded="onUploaded"></upload-image>
            <div class="editor-container">
                <label>Content:</label>
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
        UploadImage // Register Component
    },
    data() {
        return {
            editor: ClassicEditor,  // 1. กำหนด Editor Build
            editorConfig: {
                licenseKey: 'GPL',
                // สามารถปรับแต่ง Toolbar ได้ตามต้องการ
                toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'] // 2. ตั้งค่า Toolbar
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