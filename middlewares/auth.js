const jwt = require('jsonwebtoken')

const AuthMiddleware = (req,res,next)=>{
    const AuthHeader = req.headers.authorization
            const token = AuthHeader.split(' ')[1]

if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.JWT_KEY, (err, decoded)=>{
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    res.status(200)
  });

}
module.exports = AuthMiddleware