// nodeのコアモジュールのhttpを使う
const http = require('http');
const server = http.createServer();

const sleep = async ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

server.on('request', async function(req, res) {
    console.log('リクエストが来た');
    await sleep(3000);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('hello world');
    res.end();
    console.log('レスポンス返す');
});

server.listen(3000);