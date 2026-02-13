const express = require('express')
const cors = require('cors')
const app = express()

const { sequelize } = require('./models') 
const config = require('./config/config')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// เรียกใช้ Routes
require('./userPassport') 
require('./routes')(app)

// *** แก้ตรงนี้ครับ ***
sequelize.sync({ alter: true }).then(() => {
    app.listen(config.port, function () {
        console.log('Server started on port ' + config.port)
    })
}).catch((err) => {
    console.error('Unable to connect to the database:', err)
})