// Importing the express module
const express = require('express');

// Import of morgan and bodyParser
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Creating an instance of the express application
const app = express();

// Integrate morgan for logging requests
app.use(morgan('dev'));

// Integrate body-parser for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up basic routes
app.get('/', (req, res) => {
    res.send('Hello, I am gretting you!');
});

app.get('/about', (req, res) => {
    res.send('This is a simple Express server setup for the assignment.');
});

// Handle non-existent routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server and listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



/* Integrate third-party middleware:
Logger Middleware: Use a popular logging middleware like morgan to log all incoming requests to the console. This helps in monitoring and debugging the server's operation.
Body Parser Middleware: Use middleware like body-parser to parse incoming request bodies before your handlers, available under req.body.
Set up basic routes:
A root route (/) to send a simple greeting as a response.
An about route (/about) to send a brief description of the server or the project.
Handle non-existent routes by sending an appropriate error message and status code. Listen on a Port:

Configure the server to listen on a specified port (e.g., 3000), with a console message indicating the server's running status.
Test Your Server:

Run your server and use a browser or a tool like Postman to access the configured routes.
Ensure the middleware is functioning correctly, evidenced by request logs in the console and proper handling of JSON bodies in POST requests.
Test the error handling by accessing an undefined route. */