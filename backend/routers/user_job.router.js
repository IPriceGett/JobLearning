const express = require('express');
const route = express.Router();
const postulationController = require('../controllers/user_job.controller')
const validation = require('../middleware/middleware.validation')

route.post("/create",validation.verifyToken, postulationController.create);

route.put("/delete",validation.verifyToken, postulationController.deletePostulation);

route.post("/getJobs",validation.verifyToken, postulationController.getPostulations);

module.exports = route