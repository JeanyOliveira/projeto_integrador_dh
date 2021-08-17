const express = require("express");
const path = require('path');
const rotas = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.use(rotas);



app.listen(4000, () => {
    console.log("O servidor está rodando na porta 4000");
});