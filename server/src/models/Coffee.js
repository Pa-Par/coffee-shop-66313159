// src/models/Coffee.js
module.exports = (sequelize, DataTypes) => {
    const Coffee = sequelize.define('Coffee', {
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        type: DataTypes.STRING, // hot, iced, frappe
        status: DataTypes.STRING,
        description: DataTypes.STRING,
        pictures: DataTypes.STRING
    })
    return Coffee
}