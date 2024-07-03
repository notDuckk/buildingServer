// Importing modules
const express = require('express');
const morgan = require('morgan');

// Making an instance of express
const app = express();

// Integrating 3rd party middleware
app.use(morgan('dev'));
app.use(express.json());

// Setting up basic routes
app.get('/', (req, res) => {
    res.send('welcome aboard');
});

app.get('/about', (req, res) => {
    res.send('This is a project of us setting up a server using express.');
});

// Setting appropriate error
app.get('*', (req, res) => {
    res.statusCode = 404;
    res.send('Error 404');
});

// Setting port open at 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});