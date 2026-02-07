const isAuthenController = require('./controllers/isAuthenController')
const UserController = require('./controllers/UserController')
const CoffeeController = require('./controllers/CoffeeController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {

    app.get('/users', isAuthenController, UserController.index)
    app.post('/user', isAuthenController, UserController.create)
    app.put('/user/:userId', isAuthenController, UserController.put)
    app.delete('/user/:userId', isAuthenController, UserController.remove)
    app.get('/user/:userId', isAuthenController, UserController.show)

    app.get('/coffees', CoffeeController.index)
    app.get('/coffee/:coffeeId', CoffeeController.show)

    app.post('/coffee', isAuthenController, CoffeeController.create)
    app.put('/coffee/:coffeeId', isAuthenController, CoffeeController.put)
    app.delete('/coffee/:coffeeId', isAuthenController, CoffeeController.remove)

    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
}