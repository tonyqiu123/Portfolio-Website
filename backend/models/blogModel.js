const mongoose = require('mongoose');
const moment = require('moment')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    date: {
        type: String,
        default: () => moment().format("MMM DD YYYY")
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    viewCount: {
        type: Number,
        default: 0
    }
});


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;