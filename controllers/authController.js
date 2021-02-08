const db = require('../models/index')
const jwt = require('jsonwebtoken')
const  bcrypt  =  require('bcrypt')

const JWT_KEY = process.env.JWT_KEY

exports.register = function(req, res) {
    const  form_name  =  req.body.name;
    const  form_email  =  req.body.email;
    const  form_password  =  bcrypt.hashSync(req.body.password, 10);

    //find if a user already exists using email
    db.User.findOne({where : { email: req.body.email}}) .then(user => {
        if(!user) {
            db.User.create({
                name: form_name,
                email: form_email,
                password: form_password
            }).then(user => {
                // Send created user token to client
                const  expiresIn  =  24  *  60  *  60;
                const  accessToken  =  jwt.sign({ id:  user.id }, JWT_KEY, {
                    expiresIn:  expiresIn
                })
                res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn
                })

            }).catch((err) => {
                console.log('There was an error creating users', JSON.stringify(err))
                return res.send(err)
            })
        }else{
            return res.send({'message': 'Whoops! Error '})
        }
    })
}


exports.login = function(req, res) {
    const  email  =  req.body.email;
    const  password  =  req.body.password;

    db.User.find({
        where: {
            email: email
        }
    }).then((user) =>{
        if(!user){
            return res.status(401).send({
                message: "Authtication Failed"
            })
        }

        bcrypt.compare(password, user.password, (error, isMatch)=>{

            if(isMatch && !error){
                let token = jwt.sign({id: user.id}, JWT_KEY, { expiresIn: '5m' })
                jwt.verify(token, JWT_KEY, (error,data)=>{
                    console.log(error,data)
                    if(error){
                       next(error);
                    }
                })
                res.send({ success: true, token: token})
            } else {
                res.status(401).send({
                    success: false,
                    message: "Authtication Failed"
                })
            }
        })
      
    }

    ).catch((e)=>{
        res.status(400).send(e)
    })
}

