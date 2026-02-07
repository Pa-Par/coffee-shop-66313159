const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')
<<<<<<< HEAD
=======
const UserAuthenController = require('./controllers/UserAuthenController')
>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1

module.exports = (app) => {
    
    /* --- เส้นทางสำหรับจัดการผู้ใช้งาน (User) --- */
    app.get('/users', UserController.index)
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)

    /* --- เส้นทางสำหรับจัดการเมนูกาแฟ (Coffee) --- */
    app.get('/coffees', CoffeeController.index)
    app.post('/coffee', CoffeeController.create)
    app.put('/coffee/:coffeeId', CoffeeController.put)
    app.delete('/coffee/:coffeeId', CoffeeController.remove)
    app.get('/coffee/:coffeeId', CoffeeController.show)
<<<<<<< HEAD
=======

    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1
}