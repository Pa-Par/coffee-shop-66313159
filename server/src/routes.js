const isAuthenController = require('./controllers/isAuthenController')
const isAdmin = require('./controllers/isAdmin')
const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const CoffeeController = require('./controllers/CoffeeController')

module.exports = (app) => {
    app.get('/users', isAuthenController, UserController.index)
    app.post('/user', isAuthenController, UserController.create)
    app.put('/user/:userId', isAuthenController, UserController.put)
    app.delete('/user/:userId', isAuthenController, UserController.remove)
    app.get('/user/:userId', isAuthenController, UserController.show)

    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)
    
    app.post('/coffee', CoffeeController.create)
    app.put('/coffee/:coffeeId', CoffeeController.put)
    app.delete('/coffee/:coffeeId', CoffeeController.remove)
    app.get('/coffee/:coffeeId', CoffeeController.show)
    app.get('/coffees', CoffeeController.index)
    
}