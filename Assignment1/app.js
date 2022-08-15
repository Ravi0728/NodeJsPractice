//SignUp a Nodejs driven server on 3000.
//Handle Two Routes: "/" and "/users"
// Return some greeting text on "/"
// Return a list of dummy users e.g. <ul><li>User1</li></ul>.
//Add form with username<input> to "/" page and submit post request to "/create-user" upon a button click.
//Add create user route and parse incoming data and simply log it to console.


const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type','text/html');
        // res.write('<html><head><title></title><body>Welcome to Node.js Assignment1</body></head></html>');
        
        res.write('<html><head><title></title><body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body></head></html>');
        return res.end();
        
    }
    if (url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title></title><body><ul><li>User1</li><li>User2</li></ul></body></head></html>');
        res.end();
    }
    //Send a HTML Response with Page not found Text.
    if (url === '/create-user' && method === "POST") {
        res.setHeader('Content-Type','text/html');
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);  
        });

        req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });

        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
});

server.listen(3000);