const jwt = require('jsonwebtoken')

const AuthMiddleware = (req,res,next)=>{
    const AuthHeader = req.headers.authorization
            const token = AuthHeader.split(' ')[1]


   try {
        const token = AuthHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userId = decoded.email
        console.log(decode.email)
        next()
    } catch(e){
        res.status(401).send({
            "Error": "Invalid Token"       
        })
    }

}
module.exports = AuthMiddleware