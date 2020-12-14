var express = require("express");
var router = express.Router();
const passport = require("passport");
  
// router.post('/login', 
//   passport.authenticate('local', { session: true, successRedirect: '/', failureRedirect: '/login?msg="Error Auth"' }));

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      session: true
    }, (err, user, info) => {
      console.log(err);
      if(err || !user) return res.status(401).json({
        auth: false,
        msg: "Authentication failed",
        token: null
      }) 
      req.login(user, {session: false}, err => {
        if(err) res.send(err)
      })
      return res.status(200).json({
        auth: true,
        msg: "Login successfully",
        // token: token
      })
  })(req, res)
 })

router.get('/getUser', function(req, res) {
    console.log("Saved User", req.user);
    if (req.user) {
      res.status(200).send(req.user);
    } else {
      res.status(200).send({});
    }
})

router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

// router.get('/profile',
//   require('connect-ensure-login').ensureLoggedIn(),
//   function(req, res){
//     res.render('profile', { user: req.user });
//   });

module.exports = router;