const Sequelize = require("sequelize");
const db = require("../database/database");

const Discipline = db.define(
    "discipline",
    {
        name: {
            type: Sequelize.STRING(60)
        },
        content:{
            type: Sequelize.STRING(10)
        } ,
        disc_code: {
            type: Sequelize.STRING(11)
        }
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "discipline"
    }
);

module.exports = Discipline;


