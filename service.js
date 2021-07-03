const http = require("http");
const url = require('url');
const util = require('util');
const service =  http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(util.inspect(url.parse(req.url)));
});
service.listen(3000, '127.0.0.1', ()=> {
    console.log('服务器已启动,通过http:127.0.0.1:3000/来打开页面');
});