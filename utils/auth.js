// Custom middleware to redirect user to login page if visiting a page that requires user data

const authenticated = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = authenticated;