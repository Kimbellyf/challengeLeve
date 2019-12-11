const Sequelize = require("sequelize");
const db = require("../database/database");

const Class = db.define(
    "Class",
    {
        class_code:{
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,

        } ,
        disc_code: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'Discipline',
                key: 'disc_code'
              }
        },
        course_enrollment: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            allowNull: false,
        },
        semester: {
            type: Sequelize.VARCHAR(6),
            primaryKey: true,
            allowNull: false,
        },
        classroom_number:{
            type: Sequelize.VARCHAR(6),
            allowNull: false,

        },
        shift:{
            type: Sequelize.VARCHAR(6),
            allowNull: false,

        }
        
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Class"
    }
);
module.exports = Class;

/*
  `disc_code` INT(11) NOT NULL,
  `course_enrollment` INT NOT NULL,
 

  PRIMARY KEY (`class_code`, `disc_code`, `course_enrollment`),
  INDEX `class_course_enrollment_fk` (`course_enrollment` ASC),
  UNIQUE INDEX `class_code_UNIQUE` (`class_code` ASC),
  INDEX `class_codigo_disciplina_fk` (`disc_code` ASC),
  CONSTRAINT `class_codigo_disciplina_fk`
    FOREIGN KEY (`disc_code`)
    REFERENCES `mydb`.`Discipline` (`disc_code`),
  CONSTRAINT `class_course_enrollment_fk`
    FOREIGN KEY (`course_enrollment`)
    REFERENCES `mydb`.`Course` (`course_enrollment`))
    */