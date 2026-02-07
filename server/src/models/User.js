<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
    // กำหนดโครงสร้างตาราง User
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true // อีเมล์ต้องไม่ซ้ำ
=======
const {User} = require('../models')
const bcrypt = require('bcrypt')

async function hashPassword (user, options) {
    if (!user.changed('password')) {
        return
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.setDataValue('password', hash)
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1
        },
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
<<<<<<< HEAD
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
=======
        status: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    User.prototype.comparePassword = async function (password) {
        return await bcrypt.compare(password, this.password)
    }

>>>>>>> 06a9b95ca6b71ce2d2a855aa1ddc3f7a6fb151f1
    return User
}