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

app.use(express.urlencoded({ extended: true}));

// Define a default route ("/")
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/confirm', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.get('/admin', (req, res) => {
    res.send(guests);
});

app.post('/confirm',(req, res) => {
    console.log(req.body);

    const guest = req.body;

    guests.push(guest);
    console.log(guest);

     res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Start the server on the designated port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});