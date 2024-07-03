const jwt = require('jsonwebtoken');
const jwtAuthMiddleware = (req ,res, next )=>{
    ///Extract the jwt token from the request headers 
    const token =req.headers.authorization.split(' ')[1];///////remove the first useless bearer part
    if(!token) res.status(401).json({error:'unauthorized'});
    try{
        //verify  the JWT token 
        /*
        jwt.verify(token, process.env.JWT_SECRET) verifies the token using the secret key stored in your environment variable JWT_SECRET.
        If the token is valid, the decoded user information is stored in decoded.
        */
        const decoded =jwt.verify(token,process.env.JWT_SECRET);  //////comparing the secret file
        //Attach the user information  to request the object
        //req.EncodedData=decoded
        req.user =decoded
        next();
    }
    catch(err){
        console.error(err);
        res.status(401).json({error:'invalid token'})   
    }
}
const generateToken = (userData) =>{      //////user data is sent throug payload
    ///create new jwt token using user data 
    //return jwt.sign(userData,process.env.JWT_SECRET);
    return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn: 30000});////////here the token will expire after ten 30000 sec or 8 hrs after that you have to make a new token using login in post  
}

module.exports ={jwtAuthMiddleware,generateToken};

/*
//////////////summary of today /////////
here first we learn about jwt token which has three parts header --it contains type and algo used 
second is payload --- Basically it is the little bit of user data which is stored in token for other purposes
thirldy is the secret key --- it is the basically the just a jwt secret key

in this we first seprate the brearer form the token than than  write jwt.js commands for token 
than we integrate it into router(/person) and add jwtauthMiddleware.js 
file used
jwt.js ,routes file 
*/
