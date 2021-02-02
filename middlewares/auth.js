const AuthMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization

    if (authHeader){
        const token = authHeader.split('')[1]

        jwt.verify(token, process.env.JWT_KEY, (error,user)=>{
            if(error){
                return res.status(403)
            }
            req.user = user.user
            next()
        })
    } else {
        res.status(401)
    }

}

export default AuthMiddleware