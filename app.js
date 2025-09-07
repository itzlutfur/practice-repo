const express = require('express');
const app = express();
const userRoute = require('./route/user');

app.use('/api/user', userRoute);

app.listen(3000, () =>
  console.log('Server is running on 3000') 
);