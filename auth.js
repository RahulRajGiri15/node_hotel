const passport = require('passport');
const LocalStrategy= require('passport-local').Strategy;

passport .initialize();
passport.use(new LocalStrategy(async (USERNAME, PASSWORD, done)=>{ /////verifiction function (user,pass,done)
        ////write authentication logic here 
        try {
            console.log("Crediticals recevied:",username,password);
            const user = await Person.findOne({username: username});
            if(!user)
                return done(null ,false,{message:"incorrect username."});
            const isPasswordMatch =user.password== password ? true: false;
            if(isPasswordMatch){
                return done (null, user);
            }
            else{
                return done (null ,false,{message:"incorrect password."});
            }
            
        } catch (error) {
            return done (error);
        }

module.exports =auth
}));

