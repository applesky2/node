const http = require("http");
const url = require('url');
let fs = require('fs');
const service =  http.createServer((req, res) => {
    const pathName = url.parse(req.url).pathname;
    fs.readFile(pathName.substring(1), (err, data) => {
        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(data.toString());
        }
        res.end();
    })
});
service.listen(3000, '127.0.0.1', ()=> {
    console.log('服务器已启动,通过http:127.0.0.1:3000/来打开页面');
});