const {Router} = require('express');
const appRouter = Router();
const {userRouter} = require('./user');
const {loginRouter} = require('./login');

appRouter.use('/user', userRouter);
appRouter.use('/login', loginRouter);

module.exports = appRouter;