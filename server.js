const http = require('http'); // Import the http module
const fs = require('fs');     // Import the file system module
const path = require('path');  // Import the path module

const PORT = 3000; // Define the port number

// Create the server
http.createServer((req, res) => {
    // Log the requested URL
    console.log("Request URL: ", req.url);
    
    let filePath;

    // Always serve `index.html` for specific routes like `/signIn` and `/signUp`
    if (req.url === '/signIn' || req.url === '/signUp') {
        filePath = path.join(__dirname, 'index.html');
    }
    // Check if the request is for a file in 'js', 'style', 'assets/imgs', or 'assets/Exo_2' folder
    else if (req.url.startsWith('/js/')) {
        filePath = path.join(__dirname, req.url); // Serve files from the 'js' folder
    } else if (req.url.startsWith('/style/')) {
        filePath = path.join(__dirname, req.url); // Serve files from the 'style' folder
    } else if (req.url.startsWith('/assets/imgs/')) {
        filePath = path.join(__dirname, req.url); // Serve files from the 'assets/imgs' folder
    } else if (req.url.startsWith('/assets/Exo_2/')) {
        filePath = path.join(__dirname, req.url); // Serve files from the 'assets/Exo_2' folder
    } else {
        filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url); // Serve 'index.html' by default
    }

    // Read the requested file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // If there is an error (file not found)
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found'); // Send a 404 response
        } else {
            // Determine content type based on file extension
            const ext = path.extname(filePath);
            let contentType = 'text/html'; // Default content type

            if (ext === '.js') contentType = 'application/javascript';
            else if (ext === '.css') contentType = 'text/css';
            else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
            else if (ext === '.png') contentType = 'image/png';
            else if (ext === '.gif') contentType = 'image/gif';
            else if (ext === '.woff') contentType = 'font/woff';
            else if (ext === '.woff2') contentType = 'font/woff2';
            else if (ext === '.ttf') contentType = 'font/ttf';
            else if (ext === '.otf') contentType = 'font/otf';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data); // Send the file data
        }
    });
}).listen(PORT, () => {
    // Start listening on the specified port
    console.log(`Server running at http://localhost:${PORT}`);
});
