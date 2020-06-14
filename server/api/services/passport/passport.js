const passport = require("passport");

const authDb  = require("../../db/mongodb/auth/auth-post.db");
const CustomError = require("../../helpers/error/CustomError");
const userDb = require("../../db/mongodb/user/user-db");
var GoogleStrategy =  require("passport-google-token").Strategy;

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
      
     
    },
    async (accessToken, refreshToken, profile, done) => {
     
      console.log("token: " +accessToken);
      try {
     
        const {email} = profile._json;
        console.log("profile: "+ JSON.stringify(profile._json));
        console.log("email:" +email)
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
