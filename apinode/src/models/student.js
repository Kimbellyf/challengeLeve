const Sequelize = require("sequelize");
const db = require("../database/database");

const Student = db.define(
    "Student",
    {
        student_enrollment:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            //reference id
            references: {         // User belongsTo Company 1:1
                model: 'Person',
                key: 'id'
              }
        }, 
        status_on:{
            type: Sequelize.BOOLEAN(),
        },
        enr_date:{
            type: Sequelize.DATE,
        } ,  
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Student"
    }
);

module.exports = Student;
