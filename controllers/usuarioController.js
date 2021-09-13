const { listaDeUsuarios } = require("../models/usuariosModel");
const usuarioModel = require("../models/usuariosModel");

const usuarioController = {
  exibirLogin(req, res) {
    return res.render("login");
  },
  exibirCadastro(req, res) {
    return res.render("cadastro");
  },
  salvarUsuario: (req, res) => {
    const { nome, email, senha } = req.body;
    usuarioModel.cadastrarUsuario(nome, email, senha);
    return res.redirect("/login");
  },
  verificarUsuario: (req, res) => {
    const { email, senha } = req.body
    const usuario = usuarioModel.buscarUsuarioPorEmail(req.body.email);


    if(!usuario || usuario.senha != senha){
      res.render('login', {
        error:  'Usuario não existe ou a senha está errada!'
      });
    } 
      res.redirect('/admin/produtosAdmin')
  }
};

module.exports = usuarioController;
