const express = require('express');
const route = express();
const user = require('./control/user');
const login = require('./control/login');
const buy = require('./control/buy');
const verifyLogin = require('./middleware/verifyLogin');

route.post('/user', user.createUser);
route.post('/login', login);

route.use(verifyLogin)


route.get('/user', user.listUser);
route.patch('/user', user.updateUser);


route.post('/buy', buy.buytapas);
route.get('/tapas', buy.listtapas);


module.exports = route