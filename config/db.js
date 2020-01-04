const mongoose = require('mongoose')
const { mongodbUrl } = require("../dbConfig");
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB 数据库连接成功！");
}).catch(err => {
    console.log("MongoDB 数据库"+ err);
})

module.exports = mongoose;