const { Router } = require("express");
const express = require("express");
const usuarioController = require("../controllers/usuarioController");
const routes = express.Router();

routes.get("/login", usuarioController.exibirLogin);
routes.get("/cadastro", usuarioController.exibirCadastro);
routes.post("/salvarUsuario", usuarioController.salvarUsuario);
routes.post('/verificarUsuario', usuarioController.verificarUsuario);
routes.get('/logout', usuarioController.logout);
routes.get('/painelUser', usuarioController.painelUser);
routes.get('/painelUser/ver/:id', usuarioController.findById);
routes.get('/painelUser/editar/:id', usuarioController.edit);
routes.get('/search', usuarioController.search);
routes.put('/editar/:id', usuarioController.update);

module.exports = routes;