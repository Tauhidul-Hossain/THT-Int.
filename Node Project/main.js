const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        let result = fs.unlink('demo.txt', (result) => {
            if(result){
                res.end("Deleted");
            }
            else{
                res.end("Not Found");
            }
        })
    }
});
server.listen( );
console.log("Running Server")

// if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Home</h1>');
//     res.end();
// } else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>About</h1>');
//     res.end();
// } else if (req.url === '/contact') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Contact</h1>');
//     res.end();
// } else if (req.url === '/blog') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Blog</h1>');
//     res.end();
// }
