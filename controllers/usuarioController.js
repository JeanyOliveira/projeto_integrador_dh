// const { listaDeUsuarios } = require("../models/usuariosModel");
const { User } = require('../models')
// const usuarioModel = require("../models/usuariosModel");
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const usuarioController = {
  exibirLogin(req, res,) {
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

      Object.assign(req.session, {
        user: {
          id: user.id,
          name: user.name,
          type_user: user.type_user,
        },
      });

      if(user.type_user === "ADMIN"){
        return res.redirect('/admin')
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
      const { name, email, password, rg, phone, image } = req.body;

      const user = await User.create({
        name,
        email,
        rg, 
        phone, 
        image,
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

  painelUser: async (req, res) => {
    let users = await User.findAll();

    return res.render('painelUser', {users})
  },
  findById: async (req, res) => {
    let {id} = req.params;

    let user = await User.findOne({
      where:{
        id: id
      }
    })

    return res.render('viewUser', {user});
  },
  edit: async (req, res) => {
    const {id} = req.params;

    const usuario = User.findByPk(id);

    return res.render('editarUsuario', {usuario})
  },
  update: async(req, res) => {
    res.send('oi');
  },
  search: async(req, res) => {
    let {key} = req.query;

    let users = await User.findAll({
      where:{
        name:{
          [Op.like]: `%${key}%`
        }
      },
    });

    return res.render('painelUser', {users})

  },

  logout(req, res) {
    req.session.destroy();
    return res.redirect('/login');
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
