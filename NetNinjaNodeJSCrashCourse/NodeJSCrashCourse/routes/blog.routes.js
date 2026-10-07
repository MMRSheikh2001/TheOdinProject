const express = require('express');

const Blog = require('../models/blog');

const blogController= require('../controllers/blog.controller');

const router = express.Router();



router.get('/blogs/add', (req, res) => {
    const blog = new Blog({
        title: "New Blog",
        snippet: "About my new blog",
        body: "About my new blog more"
    });

    blog.save().then((result) => {
        res.send(result);
    })
        .catch((err) => {
            console.log(err);
        });


});


router.get('/blogs', blogController.allBlogs);

router.get('/blogs/id', (req, res) => {
    Blog.findById("6ac643fa144c57478474dce7")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            console.log(err);
        })
});

router.delete('blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})


router.post('/blogs', (req, res) => {
    console.log(req.body);

    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.send(result);
        }).
        catch((err) => {
            console.log(err);
        })

})


module.exports = router;