const isAuthenController = require('./controllers/isAuthenController')
const isAdmin = require('./controllers/isAdmin')
const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
    // จัดการข้อมูลผู้ใช้ (ต้อง Login ก่อน)
    app.get('/users', isAuthenController, UserController.index)
    app.post('/user', isAuthenController, UserController.create)
    app.put('/user/:userId', isAuthenController, UserController.put)
    app.delete('/user/:userId', isAuthenController, UserController.remove)
    app.get('/user/:userId', isAuthenController, UserController.show)

    // ดูเมนูกาแฟ (เปิดสาธารณะ ไม่ต้องผ่าน Middleware)
    app.get('/coffees', CoffeeController.index)
    app.get('/coffee/:coffeeId', CoffeeController.show)

    // จัดการเมนูกาแฟ (ต้อง Login และเป็น Admin เท่านั้น)
    // แก้ไขจาก isAuthen เป็น isAuthenController ให้ตรงกับด้านบน
    app.post('/coffee', isAuthenController, isAdmin, CoffeeController.create)
    app.put('/coffee/:coffeeId', isAuthenController, isAdmin, CoffeeController.put)
    app.delete('/coffee/:coffeeId', isAuthenController, isAdmin, CoffeeController.remove)

    // ระบบ Authentication
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
}