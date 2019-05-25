const fs = require('fs');
const path = require('path');
const express = require('express');
const accountRoutes = require('./routes/account');
const servicesRoutes = require('./routes/services');

const app = express();

const {accounts,users,writeJSON} = require('./data');


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/account',accountRoutes);
app.use('/services',servicesRoutes);

app.get('/profile', (req,res) =>{
  res.render('profile', {user:users[0]});
});
app.get('/', (req,res) =>{
  res.render('index',{title:"Account Summary", accounts});
});

app.listen(3000, ()=>{
  console.log('Listening to port 3000 !');
})
