const Sequelize = require("sequelize");
const db = require("../database/database");

const Course = db.define(
    "course",
    {
        name: {
            type: Sequelize.STRING(60)
        },
        course_enrollment: {
            type: Sequelize.INT,
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "course"
    }
);

module.exports = Course;



