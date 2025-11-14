const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the correct directories for views and static files
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.redirect('/blog');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/blog/:slug', (req, res) => {
    res.render('blog-detail');
});

module.exports = app;