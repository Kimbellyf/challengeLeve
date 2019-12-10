const Sequelize = require("sequelize");
const db = require("../database/database");

const Discipline = db.define(
    "discipline",
    {
        disc_code: {
            type: Sequelize.INT(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        name: {
            type: Sequelize.STRING(45),
            allowNull: false,
        },
        content:{
            type: Sequelize.VARCHAR(100),
            allowNull: false,
        } ,
        teacher_enrollment:{
            type: Sequelize.INT,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'Teacher',
                key: 'teacher_enrollment'
              }
            
        }

/*
  PRIMARY KEY (`disc_code`),
  INDEX `disc_code_teacher_fk` (`teacher_enrollment` ASC),
  CONSTRAINT `disc_code_teacher_fk`
    FOREIGN KEY (`teacher_enrollment`)
    REFERENCES `mydb`.`Teacher` (`teacher_enrollment`));
    */
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "discipline"
    }
);

module.exports = Discipline;


