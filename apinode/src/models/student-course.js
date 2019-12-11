const Sequelize = require("sequelize");
const db = require("../database/database");

const Student_course = db.define(
    "Student_course",
    {
        student_course_code:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        course_enrollment: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            validate:{
                notEmpty:{
                    msg: "Esse campo não pode ser vazio"
                },
            },
            references: {         // User belongsTo Company 1:1
                model: 'Course',
                key: 'course_enrollment'
              }
        },
        student_enrollment:{
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            validate:{
                notEmpty:{
                    msg: "Esse campo não pode ser vazio"
                },
            },
            references: {         // User belongsTo Company 1:1
                model: 'Student',
                key: 'student_enrollment'
              }
        } ,
        
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Student_course"
    }
);

module.exports = Student_course;

/*
`student_course_code` INT NOT NULL AUTO_INCREMENT,
  `student_enrollment` INT NOT NULL,
  `course_enrollment` INT NOT NULL,
  PRIMARY KEY (`student_course_code`, `student_enrollment`, `course_enrollment`),
  INDEX `fk_course_student_course1_idx` (`course_enrollment` ASC),
  INDEX `fk_course_student_student1` (`student_enrollment` ASC),
  CONSTRAINT `fk_course_student_student1`
    FOREIGN KEY (`student_enrollment`)
    REFERENCES `mydb`.`Student` (`student_enrollment`),
  CONSTRAINT `fk_course_student_course1`
    FOREIGN KEY (`course_enrollment`)
    REFERENCES `mydb`.`Course` (`course_enrollment`))
ENGINE = InnoDB;


*/