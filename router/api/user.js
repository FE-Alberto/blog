const express = require('express');
const router = express.Router();

const { User } = require('./../../model/user')
router.get("/register",(req,res)=>{
    res.send("注册")
})
router.post('/api/register', async (req, res) => {
    console.log(req.body);
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
    })
    res.send(user)
})
module.exports = router;