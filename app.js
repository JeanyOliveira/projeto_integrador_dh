const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const rotas = require('./routes');
const rotasProdutos = require('./routes/produtos');
const rotasDeUsuarios = require('./routes/rotasUsuarios')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")))

app.use(rotas);
app.use(rotasProdutos);
app.use(rotasDeUsuarios);

app.listen(4000, () => {
    console.log("O servidor está rodando na porta 4000");
});