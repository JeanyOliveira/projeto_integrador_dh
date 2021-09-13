const express = require("express");
const usuarioController = require("../controllers/usuarioController");
const routes = express.Router();

routes.get("/login", usuarioController.exibirLogin);
routes.get("/cadastro", usuarioController.exibirCadastro);
routes.post("/salvarUsuario", usuarioController.salvarUsuario);
routes.post('/verificarUsuario', usuarioController.verificarUsuario);

module.exports = routes;