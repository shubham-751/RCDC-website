const express = require('express');
const adminRouter = express.Router();
const fs = require('fs');
const multer = require('multer');
const Project = require('../models/Project');
const mongoose = require('mongoose');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
       cb(null, './uploads');
    },
    filename: (req, file, cb) => {
       cb(null, Date.now()+"--"+file.originalname);
    }
 });
 const upload = multer({storage: fileStorageEngine});





adminRouter.post('/add', async (req, res) => {
   let proj = new Project(req.body);
   console.log(proj);
   await proj.save();
   res.send("success");
});

adminRouter.post('/multiple', upload.array('images', 5), (req, res) => {
   console.log(req.files);
   res.send("success");
});

adminRouter.post('/single', upload.single('image'), (req, res) => {
   res.send(req.file);
});


module.exports = adminRouter;