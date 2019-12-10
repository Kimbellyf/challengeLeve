const Sequelize = require("sequelize");
const db = require("../database/database");

const Person = db.define(
    "Person",
    {
        id:{
            type: Sequelize.INT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: Sequelize.STRING(60)
        },
        cpf:{
            type: Sequelize.STRING(10),
            allowNull: false,
            unique: true,
        } ,
        telephone: {
            type: Sequelize.STRING(10)
        }
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Person"
    }
);

module.exports = Person;
