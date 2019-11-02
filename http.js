// nodeのコアモジュールのhttpを使う
const http = require('http');
const server = http.createServer();

const sleep = async ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

// (async () => {
//     console.log('t');
//     await sleep(3000);
//     console.log('u');
// })();

server.on('request', async function(req, res) {
    console.log('リクエストが来た');
    await sleep(3000);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write('hello world');
    res.end();
    console.log('レスポンス返す');
});

// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(3000);