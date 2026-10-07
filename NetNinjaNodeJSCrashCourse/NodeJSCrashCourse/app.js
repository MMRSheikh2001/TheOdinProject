const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const Blog = require('./models/blog');

const mongoose = require('mongoose');

const app = express();

//register view engine

//db connection

mongoose.connect(process.env.URL)
    .then((result) => {
        app.listen(3000);
        console.log("Connected to DB");
    }).catch(
        (err) => {
            console.log(err);
        }
    );


app.set('view engine', 'ejs');




app.use(morgan('dev'));

app.use(express.static('public'));


app.get('/add-blog', (req, res) => {
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


app.get('/get-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);

        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/single-blog', (req, res) => {
    Blog.findById("6ac643fa144c57478474dce7")
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})


app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);

    next();

});

app.use((req, res, next) => {
    console.log("In next middleware");

    next();
})

app.get('/', (req, res) => {

    //  res.send('<h1>Hello World</h1>')

    res.sendFile('./views/index.html', { root: __dirname });

});

app.get('/about', (req, res) => {

    // res.send('<h1>About Page</h1>')
    res.sendFile('./views/about.html', { root: __dirname });

});

app.get('/mahbub', (req, res) => {
    res.sendFile('./views/mahbub.json', { root: __dirname })
})

//redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404 pages

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });

})