const express = require('express');
const morgan = require('morgan');

const blogRoutes = require('./routes/blog.routes');

require('dotenv').config();

const Blog = require('./models/blog');

const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));

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



app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);

    next();

});




// blog routes

app.use(blogRoutes);

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
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