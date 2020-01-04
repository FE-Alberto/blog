const express = require('express');
const app = express();
require('./config/db');

const router = require('./router/api/user');

app.use(express.json())

// 静态资源文件
app.use('/views/static',express.static('pubilc'))

app.use(router);

app.get('/', (req, res) => {
    res.send("ok")

})


app.listen(3001, () => {
    console.log("http://localhost:3001");
})