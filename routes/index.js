const express = require('express');
const path = require("path");
const routes = express.Router();


routes.get("/", (req, res) => {
    res.render('home');
});

routes.get("/home", (req, res) => {
    res.render('home');
});

routes.get("/produto", (req, res) => {
    res.render('produto');
});

routes.get("/produtos", (req, res) => {
    res.render('produtos');
});

routes.get("/quemsomos", (req, res) => {
    res.render('quemsomos');
});



module.exports = routes;