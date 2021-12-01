module.exports = (req, res, next) => {
    const { user } = req.session
    res.locals.user = user;
    next();
};