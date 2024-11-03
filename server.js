const http = require('http');
const fs = require('fs');  
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
    console.log("Request URL: ", req.url);
    
    let filePath;

    if (req.url === '/signIn' || req.url === '/signUp' || req.url === '/chat') {
        filePath = path.join(__dirname, 'index.html');
    }
    else if (req.url.startsWith('/js/')) {
        filePath = path.join(__dirname, req.url); 
    } else if (req.url.startsWith('/style/')) {
        filePath = path.join(__dirname, req.url); 
    } else if (req.url.startsWith('/assets/imgs/')) {
        filePath = path.join(__dirname, req.url); 
    } else if (req.url.startsWith('/assets/Exo_2/')) {
        filePath = path.join(__dirname, req.url); 
    } else {
        filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
          
            fs.readFile(path.join(__dirname, '404.html'), (err404, data404) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                if (err404) {
                    res.end('<h1>404 - Not Found</h1><p>The page you requested does not exist.</p>');
                } else {
                    res.end(data404); 
                }
            });
        } else {
            const ext = path.extname(filePath);
            let contentType = 'text/html';

            if (ext === '.js') contentType = 'application/javascript';
            else if (ext === '.css') contentType = 'text/css';
            else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
            else if (ext === '.png') contentType = 'image/png';
            else if (ext === '.svg') contentType = 'image/svg+xml';
            else if (ext === '.gif') contentType = 'image/gif';
            else if (ext === '.woff') contentType = 'font/woff';
            else if (ext === '.woff2') contentType = 'font/woff2';
            else if (ext === '.ttf') contentType = 'font/ttf';
            else if (ext === '.otf') contentType = 'font/otf';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
