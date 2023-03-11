const jwt = require('jsonwebtoken')
const secret = require('../config/default.json')

module.exports = function(req,res,next) {
    //get token from header
    const token = req.header('x-auth-token')
    // check if not token
    if(!token){
        return res.status(401).json({ msg:'No token'})
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, secret.jwtSecret)
        req.user = decoded.user
        next()
    } catch(err) {
        res.status(401).json({ msg:'Token is notvalid'})
    }
}