var Strategy = require('passport-local').Strategy;
// var db = require('./db');
const passport = require("passport");

module.exports = function configurePassport (app) {
    function findByEmail(email) {
        return email === "abc@gmail.com"
            ? {email: "abc@gmail.com", password: "pass"}
            : null;
    }
    
    // Configure the local strategy for use by Passport.
    //
    // The local strategy require a `verify` function which receives the credentials
    // (`email` and `password`) submitted by the user.  The function must verify
    // that the password is correct and then invoke `cb` with a user object, which
    // will be set at `req.user` in route handlers after authentication.
    passport.use(new Strategy(async function(email, password, cb) {
            console.log("Authenticating", email, password);
            const user = await findByEmail(email);
            try {
                //If user not found
                if(!user) {
                    console.log("User not found");
                    return cb(null, false)
                }
                //Password Incorrect {
                if(user.password !== password) {
                    console.log("Incorrect password")
                    return cb(null, false);
                }
                // All good
                console.log("User Authenticated");
                return cb(null, user);
            } catch (err) {
                console.log("Error Auth:", err);
                return cb(err, null);
            }
    
            
            //Mongo Function
            db.users.findByEmail(email, function(err, user) {
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                if (user.password != password) { return cb(null, false); }
                return cb(null, user);
            });
    }));
    
    // Configure Passport authenticated session persistence.
    //
    // In order to restore authentication state across HTTP requests, Passport needs
    // to serialize users into and deserialize users out of the session.  The
    // typical implementation of this is as simple as supplying the user ID when
    // serializing, and querying the user record by ID from the database when
    // deserializing.
    passport.serializeUser(function(user, cb) {
        cb(null, user.username);
    });
      
    passport.deserializeUser(async function(id, cb) {
        const user = await findByUsername(async function (username, cb) {
            try {
                const user = await findByUsername(username);
                cb(null, user);
            } catch (error) {
                cb(error)
            }
        });
    });
    
    app.use(require('body-parser').urlencoded({ extended: true }));
    app.use(require('express-session')({ secret: 'RentHouseExpress', resave: false, saveUninitialized: false }));
    
    // Initialize Passport and restore authentication state, if any, from the
    // session.
    app.use(passport.initialize());
    app.use(passport.session());
}
