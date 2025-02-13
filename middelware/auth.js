const isLoggedIn = (req, res, next) => {
    console.log('---VAMOS A COMPROBAR LA SESIÓN---->', req.session)

    !req.session.currentUser ? res.render('auth/login', { errorMessage: 'Desautorizado' }) : next()
}

const checkRole = (...rolesToCheck) => (req, res, next) => {
    if (rolesToCheck.includes(req.session.currentUser.roles)) {
        next()
    } else {
        res.render('auth/login', { errorMessage: 'No tienes permisos' })
    }
}

module.exports = { isLoggedIn, checkRole }