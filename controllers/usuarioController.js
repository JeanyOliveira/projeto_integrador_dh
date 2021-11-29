// const { listaDeUsuarios } = require("../models/usuariosModel");
const { User } = require('../models')
const usuarioModel = require("../models/usuariosModel");
const bcrypt = require('bcryptjs');

const usuarioController = {
  exibirLogin(req, res) {
    return res.render("login");
  },
  async verificarUsuario(req, res) {    
    try {
      const { email, password } = req.body;
      
      const user = await User.findOne({
        where: {
          email
        }
      })
      if(!user) {
        return res.render('login', {
          error: 'Usuário ou senha estão incorretos!'})
      }

      if(!bcrypt.compareSync(password, user.password)) {
        return res.render('login', {
          error: 'Usuário ou senha estão incorretos!'})
      }

      // DEU CERTO!
      return res.redirect('/home');
    } catch (error) {
      console.log(error);
      // PROBLEMA NO SERVER
      return res.render('login', {
        error: 'Sistema indisponivel, tente novamente!'})
    };
  },

  exibirCadastro(req, res) {
    return res.render("cadastro");
  },
  async salvarUsuario(req, res) {
    
    try {
      const { name, email, password } = req.body;

      const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        created_at: new Date().toDateString(),
        updated_at: new Date().toDateString(),
      });
      return res.redirect('/login');
    } catch (err) {
      console.log(err);
      return res.redirect('/verificarUsuario');
    }
  },

  // salvarUsuario: (req, res) => {
  //   const { nome, email, senha } = req.body;
  //   usuarioModel.cadastrarUsuario(nome, email, senha);
  //   return res.redirect("/login");
  // },
  

  // verificarUsuario: (req, res) => {
  //   const { email, senha } = req.body
  //   const usuario = usuarioModel.buscarUsuarioPorEmail(req.body.email);


  //   if(!usuario || usuario.senha != senha){
  //     res.render('login', {
  //       error:  'Usuario não existe ou a senha está errada!'
  //     });
  //   } 
  //     res.redirect('/admin/produtosAdmin')
  // }
};

module.exports = usuarioController;
