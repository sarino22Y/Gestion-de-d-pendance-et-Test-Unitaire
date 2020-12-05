var express = require('express');
var app = express();
var port=8888;

const date = require('./app/index').dateApp;
const { date1000 } = require('./app/dates');

app.listen(port,()=>{
    console.log("le serveur ecoute le port "+port);
});

app.get('/:num-:num1-:num2',(req,res)=>{
    res.send('Date donnée: '+date.dateLisible((req.params.num),(req.params.num1),(req.params.num2)) + 
    "<br/><br/><strong> Dates après 1000 jours: "+date1000()+"</strong>");

   // console.log(req.params.num,req.params.num1,req.params.num2)
});

app.use((req,res)=>{
    res.status(404).send("Veuillez entrer la date <br/> par exemple: <strong><a href='http://localhost:8888/2020-12-31'>localhost:8888/2020-12-31</a></strong>");
});