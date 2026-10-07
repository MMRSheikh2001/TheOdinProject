const Blog = require('../models/blog');
const allBlogs = (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);

        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = { allBlogs };