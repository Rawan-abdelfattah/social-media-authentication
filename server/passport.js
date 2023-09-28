const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const GOOGLE_CLIENT_ID='362857690169-sm3945qvdkp8vf059n6bks3sgid70sbr.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET='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'
 

const GITHUB_CLIENT_ID='35e6a7b2c13c05650114'
const GITHUB_CLIENT_SECRET='3e0f7b70d452a8cd3b11832fe0bb93f49e822296'

const FACEBOOK_CLIENT_ID='858616025365418'
const FACEBOOK_CLIENT_SECRET='765e487ad1649ffee470be8783728c88'
 

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));


passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  });