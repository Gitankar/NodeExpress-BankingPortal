const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const accountData,accounts,userData,userss;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.readFileSync(path.join(__dirname,'json',accounts.json'),'utf8',(err, data) =>{
  if(err){
    return condolr.log("Error occured while reading file");
  }
  accountData = data;
  accounts = JSON.parse(accountData);
});

app.readFileSync(path.join(__dirname,'json','users.json'), 'utf8', (err,res) =>{

  if(err){
    return console.log("Error while reading data from Users Json");
  }
  userData = data;
  users = JSON.parse(userData);
});

app.get('/savings', (req,res) =>{
  app.render('account', {accounts.savings});
});

app.get('/checking', (req,res) =>{
  app.render('account', {accounts.checking});
});

app.get('/credit', (req,res) =>{
  app.render('account', {accounts.credit});
});

app.get('/profile', (req,res) =>{
  app.render('profile', {user:users[0]});
});

app.get('/', (req,res) =>{

  res.render('index',{title:'Account Summary', accounts:accounts});

});

app.listen(3000, ()=>{
  console.log('Listening to port 3000 !');
})
