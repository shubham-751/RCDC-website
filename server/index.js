const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const Project = require('./models/Project');
const projRouter = require('./apiRoutes/projectAPI');
const adminRouter = require('./apiRoutes/adminAPI');


//DOT ENV VARIABLES
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded( { extended:false }));
app.use(express.json());

const fileStorageEngine = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './uploads');
   },
   filename: (req, file, cb) => {
      cb(null, Date.now()+"--"+file.originalname);
   }
});
const upload = multer({storage: fileStorageEngine});



////CONNECTING TO DATABASE
mongoose.connect('mongodb://localhost:27017/rotractProjects')
 .then(() => {
    console.log("DB connected..");
    app.listen(PORT, () => {
        console.log("Listening on Port 5000");
    });
 })
 .catch(() => {
    console.log("DB not connected");
 });


 
////PROJECT and ADMIN APIS
app.use('/projects', projRouter);
app.use('/admin', adminRouter);