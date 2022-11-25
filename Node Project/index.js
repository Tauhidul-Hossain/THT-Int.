const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url == '/'){
    fs.exists('demo.txt', (result) => {
        if (result) {
            res.end('Exist')
            }
       else {
            res.end('Not Exist')
            }
    });
    
   }
});
server.listen(4040);
console.log('Working Succesfully');

// let error = fs.writeFileSync('demo_one.txt', 'Hello World of Sync');

// if (error) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Fail Write File');
//     res.end();
// } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('File Write Succes.');
//     res.end();
// }
// 
// const fs = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//     let error = fs.unlinkSync('demo.txt')
//     if (error) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('Fail Delete File');
//         res.end();
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('File Delete Success.');
//         res.end();
//     }
// }
// });
// server.listen(4040);
// console.log('Working Succesfully');

// if (req.url === '/') {
//     let error = fs.unlinkSync('demo.txt');
//     if (error) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('Fail Delete File');
//         res.end();
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('File Delete Success.');
//         res.end();
//     };
// }