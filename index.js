const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the correct directories for views and static files
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/blog', (req, res) => {
    res.render('blog');
});

// Blog detail route (static for now; slug ignored)
app.get('/blog/:slug', (req, res) => {
    res.render('blog-detail');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});