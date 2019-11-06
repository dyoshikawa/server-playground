const http = require('http');
const server = http.createServer();

const sleep = async ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

server.on('request', async function(req, res) {
    await sleep(3000);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('Hello');
    res.end();
});

server.listen(3000);