const express = require('express')
const router = express.Router()
const { getBlogs, setBlog, updateBlog, deleteBlog } = require('../controllers/blogController')


router.get('/', getBlogs)

router.post('/', setBlog)

router.put('/:id', updateBlog)

router.delete('/:id', deleteBlog)

module.exports = router