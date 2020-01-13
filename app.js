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
    rewrites:[
        {
            from: /^\dist\/.*$/,
            to:function(content){
                return content.parsedUrl.pathname;
            }
        },
        {
            from: /^\/.*[js|css]$/,
            to:function (content) {
                return '/dist/'+content.parsedUrl.pathname;
            }
        },
        {
            from: /^\/.*$/,
            to:function(content){
                return '/dist/';
            }
        }
    ]
}));


app.use(express.static(path.resolve(__dirname, "./dist")))





app.get("*", (req, res) => {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
    res.send(html);
})



const port = process.env.NODE_ENV == 'production' ? 80 : 8032
app.listen(port, function () {
    console.log(`http://localhost:${port}`, '服务器启动成功');
})