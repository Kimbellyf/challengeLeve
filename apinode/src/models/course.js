const Sequelize = require("sequelize");
const db = require("../database/database");

const Course = db.define(
    "course",
    {
        course_enrollment: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        } ,
        name: {
            type: Sequelize.STRING(60)
        },
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "course"
    }
);

module.exports = Course;



