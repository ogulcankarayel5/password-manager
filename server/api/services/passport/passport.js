const passport = require("passport");
const { findByEmail, findById } = require("../../db/passport/passport-db");
const { registerDb } = require("../../db/mongodb/auth/auth-post.db");
const CustomError = require("../../helpers/error/CustomError");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findById(id);
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
        console.log(email);

        const user = await findByEmail(email);

        if (user) {
          return done(null, user);
        } else {
          const newUser = {
            googleId: profile.id,
            name: profile.displayName,
            email: email,
          };

          const createdUser = await registerDb(newUser);
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
