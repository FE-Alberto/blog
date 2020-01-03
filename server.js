const { User } = require('./model/user')

const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("ok")
})

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    const user = await User.create({
        username: req.body.username,
        password:req.body.password,
    })
    res.send(user)
})

app.listen(3001, () => {
    console.log("http://localhost:3001");
})