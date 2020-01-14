const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));

// 引用最后的静态文件
app.use(express.static(path.join(__dirname, 'dist')))
app.get('/', function (req, res) {
    res.sendFile('/dist/index.html')
})


const port = process.env.NODE_ENV == 'production' ? 80 : 8032
app.listen(port, function () {
    console.log(`http://localhost:${port}`, '服务器启动成功');
})