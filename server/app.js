const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const app = express();
require('./config/db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(require('cors')())

app.use('/', history({
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));

// 引用最后的静态文件
app.use(express.static(path.join(__dirname, '../dist')))
app.get('/', function (req, res) {
    res.sendFile('../dist/index.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).send("404 找不到资源!");
    next();
});

app.use(function(err, req, res) {
    res.status(500).send("500 服务器出错！");
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

const port = process.env.NODE_ENV == 'production' ? 80 : 8032
app.listen(port, function () {
    console.log(`http://localhost:${port}`, '服务器启动成功');
})