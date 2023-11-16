const express = require('express');
const validation = require('../middleware/middleware.validation')
const route = express.Router();
const jobController = require('../controllers/job.controller')


route.post("/create",validation.verifyToken, jobController.create);

route.post("/list",validation.verifyToken, jobController.list);

route.post("/moderate-list",validation.verifyToken, jobController.moderateList);

route.post("/search",validation.verifyToken, jobController.getJobByKey);

route.post("/moderate",validation.verifyToken, jobController.moderateJob);

route.post("/byOwner",validation.verifyToken, jobController.getByOwner);

route.post("/byId",validation.verifyToken, jobController.getJob);

route.post("/disable",validation.verifyToken, jobController.disableJob);

route.delete("/delete/:id",validation.verifyToken, jobController.deleteJob);


module.exports = route