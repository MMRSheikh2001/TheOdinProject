const express = require('express');
const morgan = require('morgan');

const app = express();

//register view engine

app.set('view engine', 'ejs');


app.listen(3000);

app.use(morgan('dev'));

app.use(express.static('public'));

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