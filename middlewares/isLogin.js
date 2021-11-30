module.exports = (req, res, next) => {
    const { user } = req.session
    console.log(user);

    if(typeof user == 'undefined' && !user) {
        return res.redirect('/login');
    }

    res.locals.user = user;
    next();
};