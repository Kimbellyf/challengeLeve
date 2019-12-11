const Sequelize = require("sequelize");
const db = require("../database/database");

const Teacher = db.define(
  "Teacher",
  {
      teacher_enrollment:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          unique: true,
          references: {         // User belongsTo Company 1:1
            model: 'Person',
            key: 'id'
          }
      },
      admission_date:{
        type: Sequelize.DATE,
        allowNull: false,
      }

    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "Teacher"
  }
);

module.exports = Teacher;
