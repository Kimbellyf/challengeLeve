const Sequelize = require("sequelize");
const db = require("../database/database");

const Person = db.define(
    "Person",
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
       
        name: {
            type: Sequelize.STRING(30),
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Esse campo não pode ser vazio"
                },
                len:{
                    args:[2,30],
                    msg: "Esse campo não pode ser vazio e deve ter até 30 caracteres"
                }
            }
        },
        cpf:{
            type: Sequelize.STRING(11),
            unique: true,
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Esse campo não pode ser vazio"
                },
              
            }
        } ,
        telephone: {
            type: Sequelize.STRING(11),
            allowNull: false,
            validate:{
                notEmpty:{
                    msg: "Esse campo não pode ser vazio"
                },
                len:{
                    args:[8,11],
                    msg: "Esse campo deve ter até 11 caracteres"
                }
            }
        }
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Person"
    }
);

module.exports = Person;


    