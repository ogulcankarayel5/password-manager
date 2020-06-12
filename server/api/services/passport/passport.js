const passport = require("passport");

const authDb  = require("../../db/mongodb/auth/auth-post.db");
const CustomError = require("../../helpers/error/CustomError");
const userDb = require("../../db/mongodb/user/user-db");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser((user, done) => {
  console.log("serialize:" +JSON.stringify(user));
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    console.log("deserialze: "+id);
    const user = await userDb.findById(id);
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

passport.use(
  
  new GoogleStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: "/api/auth/google/callback",
     
    },
    async (accessToken, refreshToken, profile, done) => {
      
      try {
     
        const { email } = profile._json;
        console.log("profile: "+ JSON.stringify(profile._json));

        const user = await userDb.findByEmail(email);
       
      
        if (user) {
          return done(null, user);
        } else {
          const newUser = {
            googleId: profile.id,
            name: profile.displayName,
            email: email,
          };

          const createdUser = await authDb.register(newUser);
         
          return done(null, createdUser);
        }
      } catch (err) {
        return done(err, null);
      }
      //
    }
  )
);

//.then((existingUser)=>{
//       if(existingUser){
//           done(null,existingUser)
//       }else{
//            new User({

//                name:profile.displayName,
//                email:profile.email,
//                googleId:profile.id

//             }).save()
//            .then((user)=>{
//                done(null,user)
//            })
//       }
//  })

// }
