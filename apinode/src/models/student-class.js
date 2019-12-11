const Sequelize = require("sequelize");
const db = require("../database/database");

const Student_class = db.define(
    "Student_class",
    {
        st_class_code:{
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        class_code: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            references: {         // User belongsTo Company 1:1
                model: 'Class',
                key: 'class_code'
              }
        },
        student_enrollment:{
            type: Sequelize.INT,
            primaryKey: true,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'Student',
                key: 'student_enrollment'
              }
        }
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Class_student"
    }
);

module.exports = Student_class;

/*
`st_class_code` INT(11) NOT NULL AUTO_INCREMENT,
        `class_code` INT(11) NOT NULL,
        `student_enrollment` INT NOT NULL,
        PRIMARY KEY (`st_class_code`, `class_code`, `student_enrollment`),
        INDEX `student_class_student_enrollment_fk` (`student_enrollment` ASC),
        UNIQUE INDEX `st_class_code_UNIQUE` (`st_class_code` ASC),
        INDEX `student_class_class_fk` (`class_code` ASC) ,
        CONSTRAINT `student_class_class_fk`
          FOREIGN KEY (`class_code`)
          REFERENCES `mydb`.`Class` (`disc_code`),
        CONSTRAINT `student_class_student_enrollment_fk`
          FOREIGN KEY (`student_enrollment`)
          REFERENCES `mydb`.`Student` (`student_enrollment`))
          */