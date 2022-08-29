const express = require('express');
const projRouter = express.Router();
const Project = require('../models/Project');

projRouter.get('/projlist',async (req, res) => {
   let projs = await Project.find();
   res.send(projs);
});

module.exports = projRouter;