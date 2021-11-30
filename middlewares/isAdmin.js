module.exports = (req, res, next) => {
    const { user } = req.session;

    if(user.type_user !== "ADMIN") {
        return res.redirect('/home');
    }

    next();
}


// USAR NO EJS 


// <div>
//         <% if(user.type_user === 'ADMIN') { %> 
//         <form action="">
//             <button type="submit">Cadastrar ADMIN</button>
//         </form>
//         <% } %> 
//     </div>