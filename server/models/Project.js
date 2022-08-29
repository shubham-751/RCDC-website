const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);