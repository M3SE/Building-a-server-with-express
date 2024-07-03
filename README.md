# Building-a-server-with-express

Objective:
The goal of this assignment is to build a basic web server using Express and integrate third-party middleware to enhance its functionality. This will help you understand how middleware can be used to add features and improve request handling in your applications.

 

Assignment Tasks:

Initialize a New Express Project:

Create a new directory for your project and navigate into it.
Initialize a Node.js project with a package.json file using npm.
Install Express and any third-party middleware you plan to use.
Create the Express Server File:

In your project directory, create a file named app.js for setting up your Express server.
Configure Your Express Server with Middleware:

Import the Express module and any third-party middleware at the top of your app.js file.
Create an instance of the Express application.
Integrate third-party middleware:
Logger Middleware: Use a popular logging middleware like morgan to log all incoming requests to the console. This helps in monitoring and debugging the server's operation.
Body Parser Middleware: Use middleware like body-parser to parse incoming request bodies before your handlers, available under req.body.
Set up basic routes:
A root route (/) to send a simple greeting as a response.
An about route (/about) to send a brief description of the server or the project.
Handle non-existent routes by sending an appropriate error message and status code.
Listen on a Port:

Configure the server to listen on a specified port (e.g., 3000), with a console message indicating the server's running status.
Test Your Server:

Run your server and use a browser or a tool like Postman to access the configured routes.
Ensure the middleware is functioning correctly, evidenced by request logs in the console and proper handling of JSON bodies in POST requests.
Test the error handling by accessing an undefined route.
 

Submission

Upload to a GitHub repo and submit the repo link.