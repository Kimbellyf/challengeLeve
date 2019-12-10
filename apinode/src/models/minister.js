const Sequelize = require("sequelize");
const db = require("../database/database");

const Minister = db.define(
    "Minister",
    {
        minister_code:{
            type: Sequelize.INT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true,
        },
        teacher_enrollment:{
            type: Sequelize.INT,
            primaryKey: true,
            allowNull: false,
            unique: true,
            references: {         // User belongsTo Company 1:1
                model: 'Teacher',
                key: 'teacher_enrollment'
              }
        },
        class_code: {
            type: Sequelize.INT(11),
            primaryKey: true,
            allowNull: false,
            references: {         // User belongsTo Company 1:1
                model: 'Class',
                key: 'class_code'
              }
        },
        
    },
    /*
    `minister_code` INT NOT NULL AUTO_INCREMENT,
    `class_code` INT(11) NOT NULL,
    `teacher_enrollment` INT NOT NULL,
    PRIMARY KEY (`minister_code`, `class_code`, `teacher_enrollment`),
    INDEX `minister_enrollment_teacher_fk` (`teacher_enrollment` ASC),
    INDEX `minister_class_fk` (`class_code` ASC),
    CONSTRAINT `minister_class_fk`
      FOREIGN KEY (`class_code`)
      REFERENCES `mydb`.`Class` (`class_code`),
    CONSTRAINT `minister_enrollment_teacher_fk`
      FOREIGN KEY (`teacher_enrollment`)
      REFERENCES `mydb`.`Teacher` (`teacher_enrollment`)) */
    {
        timestamps: false,
        freezeTableName: true,
        tableName: "Minister"
    }
);

module.exports = Minister;
