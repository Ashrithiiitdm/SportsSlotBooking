import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { getUsers, addUser } from '../db/users.js';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback",
    passReqToCallback: true,
  },

  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails[0].value;
      const user = await getUsers(email);

      if (!user) {
        await addUser({ uname: profile.displayName, email: email });
        console.log("New user added:", email);
      } 
      else {
        console.log("User already exists:", email);
      }

      return done(null, profile);
    } catch (error) {
      console.error("Error in Google Strategy:", error);
      return done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
