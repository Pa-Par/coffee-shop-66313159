// src/config/config.js
module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'coffeeshop-db',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        options: {
            dialect: 'sqlite',
            storage: './coffeeshop-db.sqlite',
            logging: false
        }
<<<<<<< HEAD
=======
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1
    }
}