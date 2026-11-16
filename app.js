// Import the express module
import express, { urlencoded } from 'express';

// Create a instance of an
// express application
const app = express();

// Define port number
// for our server to listen on
const PORT = 3003;

const guests = [];

// Enable static file serving
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true}));

// Define a default route ("/")
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/confirm', (req, res) => {
    res.render('confirm');;
});

app.get('/admin', (req, res) => {
    res.render('admin', {guests});
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/confirm',(req, res) => {
    console.log(req.body);

    const guest = req.body;
    guest['timestamp'] = new Date();

    guests.push(guest);
    console.log(guest);

     res.render('confirm', {guest, guests});
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});