const asyncHandler = require('express-async-handler')

const Blog = require('../models/blogModel')

// @desc    Get blogs
// @route   GET /api/blogDatabase
// @access  Private
const getBlogs = asyncHandler(async (req, res) => {

    const blogs = await Blog.find()

    res.status(200).json(blogs)
})

// @desc    Set a blog
// @route   POST /api/blogDatabase
// @access  Private
const setBlog = asyncHandler(async (req, res) => {
    if (!req.body.title | !req.body.tags | !req.body.summary | !req.body.content | !req.body.image) {
        return res.status(400).json({ message: "You either forgot a title, tags, summary, image, or content" })
    }

    const blog = await Blog.create({
        title: req.body.title,
        tags: req.body.tags,
        summary: req.body.summary,
        content: req.body.content,
        image: req.body.image
    })
    res.status(200).json(blog)
})

// @desc    Update a blog
// @route   PUT /api/blogDatabase/:id
// @access  Private 
const updateBlog = asyncHandler(async (req, res) => {

    const blog = await Blog.findById(req.params.id)

    if (!blog)
        res.status(400).json({ message: `Blog ${req.params.id} not found` })

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedBlog)
})

// @desc    Delete a blog 
// @route   DELETE /api/blogDatabase/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {

    const blog = await Blog.findById(req.params.id)

    if (!blog)
        res.status(400).json({ message: `Blog ${req.params.id} not found` })

    await blog.remove()

    res.status(200).json({ message: `Deleted blog ${req.params.id}` })
})

module.exports = {
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog
}