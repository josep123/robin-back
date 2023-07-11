
const {Router} = require('express');
const loginRouter = Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../..');



loginRouter.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne( {email:email});
    const checkPassword = bcrypt.compareSync(password, user.password);


    if(!user) return res.status(400).send("Email does not exists");
    if(checkPassword != true) return res.status(400).send("Password does not match");

    const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET, {expiresIn: '10h' });
    res.status(200).json({ token: token });

    
  });

exports.loginRouter = loginRouter;
