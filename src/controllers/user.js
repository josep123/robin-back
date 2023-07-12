const {Router} = require('express');
const {User} = require('../models');
const userRouter = Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Creo la ruta post para el registro


userRouter.post('/register', async (req, res) => {

    const saltRounds = 10;
    const { name, email, password} = req.body;
    const hashPass = bcrypt.hashSync(password, saltRounds);
    const user = new User({name: name, email: email, password: hashPass});
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '10h' });
    
    userExist = User.findOne(req.body.email) 

   let resultUser

    if (!userExist) {
    resultUser = "true";
    } else { resultUser ="false";}




 

  user.save((error, success) => {
        if (error) {
            res.status(500).json({error: error.message});
        } else if (resultUser === "true"){
            res.status(501).json({error: error.message});
            } else {
                res.status(201).json({ token: token, user: user  });
                console.log('nuevo usuario creado!', hashPass);
            }
          
           
    })
    
})






exports.userRouter = userRouter;