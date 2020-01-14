const mongoose = require('mongoose');
const { mongoUrl, secretKey } = require('../../key.js');

const db = mongoUrl;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('mongodb数据库连接成功');
}).catch(function (err) {
    console.log(err);

})
