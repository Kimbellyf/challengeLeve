const Sequelize = require("sequelize");
const db = require("../database/database");

const Person = db.define(
    "person",
    {
        name: {
            type: Sequelize.STRING(60)
        },
        cpf:{
            type: Sequelize.STRING(10)
        } ,
        telephone: {
            type: Sequelize.STRING(10)
        }
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "person"
    }
);

module.exports = Person;
