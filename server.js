const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 5000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

 
// Database connection
const db = mysql.createConnection({
    host: '[host here]',
    user: '[username here]',
    password: '',
    database: '[database here]'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

// Route to serve the home page 
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});
 

app.get('/verify', (req, res) => {
    res.render('verify', { student: null , message : null});
});

// Route to handle search requests for certificate ID and display results on a new page
app.post('/search', (req, res) => {
    const certificateId = req.body.certificateId;

    // Query to fetch student details based on certificate ID
    const query = 'SELECT * FROM students WHERE certificate_id = ?';

    db.query(query, [certificateId], (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.render('verify', { student: null, message: 'Error retrieving data' , messageType: 'error'});
        } else if (results.length > 0) {
            // Render the view with the student data
            res.render('verify', { student: results[0], message: 'Verification successful' ,  messageType: 'success'});
        } else {
            res.render('verify', { student: null, message: 'No student found with that certificate ID', messageType: 'error' });
        }
    });
});

  app.use((req, res, next) => {
    res.status(404).render('404');
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
 

 

 