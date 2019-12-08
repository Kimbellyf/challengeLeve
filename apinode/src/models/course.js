const Sequelize = require("sequelize");
const db = require("../database/database");

const Course = db.define(
    "course",
    {
        name: {
            type: Sequelize.STRING(60)
        },
        status:{
            type: Sequelize.STRING(10)
        } ,
        enrollment_course_code: {
            type: Sequelize.STRING(11)
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "course"
    }
);

module.exports = Course;



