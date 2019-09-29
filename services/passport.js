const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI);
const User = mongoose.model('users');

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  User.findById(userId, (err, user) => done(err, user));
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
      //console.log('accessToken',accessToken);
      //console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      /*User.findOrCreate({ googleID: profile.id, email: profile.emails[0].value, firstName: profile.name.givenName, lastName: profile.name.familyName }, function (err, user) {
        return done(err, user);
      });*/
      User.findOne({googleID: profile.id}).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleID: profile.id }).save().then(user => done(null,user));
        }
      });
      /*User.findOne({
        googleID: profile.id 
    }, function(err, user) {
        if (err) {
          console.log(err);
            return done(err);
        }
        if (!user) {
            user = new User({
                googleID: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value
            });
            user.save(function(err) {
                if (err) console.log(err);
                return done(err, user);
            });
        } else {
            console.log(err);
            return done(err, user);
        }
    });*/
  }
));