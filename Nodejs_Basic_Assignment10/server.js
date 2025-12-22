// ============================================
// 📦 STEP 1: Import the built-in 'http' module
// ============================================
// Node.js comes with a built-in 'http' module
// Think of it as a tool that helps us create servers

const http = require('http');
const fs = require('fs');  // File System module - for reading files
const path = require('path');  // Path module - for working with file paths

// ============================================
// ⚙️ STEP 2: Configure the server
// ============================================
const PORT = 3000;  // Port number - like an apartment number for your server
const HOSTNAME = 'localhost';  // localhost = your own computer

// ============================================
// 🎯 STEP 3: Create the server
// ============================================
// createServer() takes a function that runs EVERY time someone requests something
// This function receives two parameters:
//   - req (request): Info about what the user wants
//   - res (response): Used to send back what they asked for

const server = http.createServer((req, res) => {
    
    // ============================================
    // 📋 STEP 3A: Log the request to console
    // ============================================
    // Get current date and time
    const now = new Date();
    const timestamp = now.toLocaleString();
    
    // Log the request details
    console.log('----------------------------------------');
    console.log(`📅 Time: ${timestamp}`);
    console.log(`🌐 Method: ${req.method}`);  // GET, POST, etc.
    console.log(`📍 URL: ${req.url}`);  // What page they're requesting
    console.log(`💻 User-Agent: ${req.headers['user-agent']}`);  // What browser
    console.log('----------------------------------------');
    
    // ============================================
    // 📄 STEP 3B: Serve the HTML file
    // ============================================
    
    // Check what URL the user requested
    if (req.url === '/' || req.url === '/index.html') {
        // User wants the homepage - serve index.html
        
        // Read the HTML file
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                // If there's an error reading the file
                console.error('❌ Error reading file:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
                return;
            }
            
            // Success! Send the HTML file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            console.log('✅ Served index.html successfully!');
        });
        
    } else {
        // User requested something we don't have - send 404
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 - Not Found</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #1a1a1a;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        text-align: center;
                    }
                    h1 { font-size: 5rem; margin: 0; }
                    p { font-size: 1.5rem; }
                </style>
            </head>
            <body>
                <div>
                    <h1>404</h1>
                    <p>🚫 Page Not Found</p>
                    <p style="font-size: 1rem;">The page "${req.url}" doesn't exist!</p>
                    <a href="/" style="color: #8bc34a; text-decoration: none; font-size: 1.2rem;">
                        Go Back Home →
                    </a>
                </div>
            </body>
            </html>
        `);
        console.log(`❌ 404 - Page not found: ${req.url}`);
    }
});

// ============================================
// 🚀 STEP 4: Start the server
// ============================================
server.listen(PORT, HOSTNAME, () => {
    console.log('');
    console.log('🎉 ====================================');
    console.log('🚀 SERVER IS RUNNING!');
    console.log('🎉 ====================================');
    console.log('');
    console.log(`📍 Local: http://${HOSTNAME}:${PORT}`);
    console.log(`📍 Network: http://localhost:${PORT}`);
    console.log('');
    console.log('💡 Press Ctrl+C to stop the server');
    console.log('');
    console.log('🔍 Watching for requests...');
    console.log('');
});