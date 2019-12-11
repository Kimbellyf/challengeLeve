'use strict';
const Course = require("../models/course");

class CourseController {
    getCourses(req, res) {
        Course.findAll()
            .then(course => res.json(course))
            .catch(err => {
                console.log("Error in query (getCourses): " + err);
                res.sendStatus(500);
            });
    }

    getCourse(req, res) {
        const { course_enrollment } = req.query;
        Course.findOne({ where: { course_enrollment } })
            .then(course => res.json(course))
            .catch(err => {
                console.log("Error in query (getCourse): " + err);
                res.sendStatus(500);
            });
    }

    createCourse(req, res) {
        const { name } = req.body;
        Course.create({ name })
            .then(course => res.json(course))
            .catch(err => {
                console.log("Error in query (createCourse): " + err);
                res.sendStatus(500);
            });
    }

    updateCourse(req, res) {
        const { course_enrollment, name} = req.body;
        Course.update({ course_enrollment,name }, { where: { id } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (updateCourse): " + err);
                res.sendStatus(500);
            });
    }
    deleteCourse(req,res){
        const { course_enrollment } = req.query;
        Course.destroy( { where: { course_enrollment } })
            .then(() => res.sendStatus(200))
            .catch(err => {
                console.log("Error in query (deleteCourse): " + err);
                res.sendStatus(500);
            });
    }
}

module.exports = new CourseController();
