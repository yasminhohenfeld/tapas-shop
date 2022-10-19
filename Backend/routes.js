const express = require('express');
const route = express();
const user = require('./control/user');
const login = require('./control/login');
const buy = require('./control/buy');

route.post('/user', user.createUser);
route.post('/login', login);


route.get('/user', user.listUser);
route.patch('/user', user.updateUser);


route.post('/buy', buy.buytacos);
route.get('/tapas', buy.listtapas);


module.exports = route