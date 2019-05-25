const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

const accountData = fs.readFileSync(path.join(__dirname,'json','accounts.json'),'utf8',(err, data) =>{
});
const accounts = JSON.parse(accountData);

const userData= fs.readFileSync(path.join(__dirname,'json','users.json'),'utf8', (err,res) =>{
});

const users =JSON.parse(userData);

app.get('/savings', (req,res) =>{
  console.log("Savings account called");
  app.render('account', {account:accounts.savings});
});

app.get('/checking', (req,res) =>{
  app.render('account', {account:accounts.checking});
});

app.get('/credit', (req,res) =>{
  app.render('account', {account:accounts.credit});
});

app.get('/profile', (req,res) =>{
  app.render('profile', {user:users[0]});
});

app.get('/', (req,res) =>{
  res.render('index',{title:"Account Summary", accounts:accounts});
});

app.listen(3000, ()=>{
  console.log('Listening to port 3000 !');
})
