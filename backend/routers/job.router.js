const express = require('express');
const validation = require('../middleware/middleware.validation')
const route = express.Router();
const jobController = require('../controllers/job.controller')


route.post("/create",validation.verifyToken, jobController.create);

route.get("/list",validation.verifyToken, jobController.list);

route.post("/search",validation.verifyToken, jobController.getJobByKey);

route.get("/byOwner",validation.verifyToken, jobController.getByOwner);

route.post("/byId",validation.verifyToken, jobController.getJob);

route.delete("/delete/:id",validation.verifyToken, jobController.deleteJob);


module.exports = route