const http = require('http');
const URL = require('url');

const server = http.createServer((req, res) => {
    const myURL = 'https://www.youtube.com/results?search_query=new+video';
    const myUrlObj = URL.parse(myURL, true);

    const myHostName = myUrlObj.host;
    const myPathName = myUrlObj.pathname;
    const mySearchName = myUrlObj.search;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(mySearchName);
    res.write(myPathName);
    res.write(myHostName);
    res.end();
});

server.listen(5050);
console.log('Working Succesfully');

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
