const SERVER_SECRET = 'PalabrasSecretasQueSoloSeYoQueSeEncriptaEnElJWT';

const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: SERVER_SECRET,
        },
        (jwtPayload, done) =>{
            const user = jwtPayload;
            return done(null,user);
        }
    )
);

const jwtValidMDW = passport.authenticate("jwt", { session: false });
const userIsAdminMDW = (req, res, next) => {
    return passport.authenticate(
        "jwt",  
        { session:false }, 
        (err, user, inf) => {
            if(err){
                console.error(err);
                return err                
            };

            if( user.role === 'Admin'){
                req.user = user;
                return next();
            }

            res.status(401).json({ error: 'User not Admin'});
    })(req, res , next);
};

module.exports= { jwtValidMDW, SERVER_SECRET, userIsAdminMDW } ;
