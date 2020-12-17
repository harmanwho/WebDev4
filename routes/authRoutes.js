const express = require("express");
const router = express.Router();
const Bcrypt = require("bcrypt");
const passport = require("passport");
const myDB = require("../db/jobmongodb.js");

//Remember to remove code you are no longer using!
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login?msg='Error auth'",
//   }),
//   function (req, res) {
//     console.log("Logged in", req.body);
//     res.redirect("/");
//   }
// );

router.post('/login', async (req, res, next) => {
  console.log("login details:", req.body);
  try {
      const user = req.body;
      const result = await myDB.getUser(user);
      await Bcrypt.compare(user.password, result.password, function (err, isValid) {
        if (err) throw res.status(403).send(err);
        if (isValid) {
            // erq.session.logged = true;
            // request.session._id = result._id;
            res.json({"user": result.firstName});
        }
        else {
            res.send('Incorrect Username and/or Password!');
        }
      })
  } catch (error) {
      res.status(500).send(error);
  }
});


router.post('/signup', async (req, res, next) => {
  try {
      req.body.password = Bcrypt.hashSync(req.body.password, 10);
      let user = req.body;
      await myDB.createUser(user);
      res.redirect(307, '/');
      // res.send({message: "User added", user: user.firstName});
  } catch (error) {
      res.status(500).send(error);
  }
});

router.get("/getUser", (req, res) =>
  res.send({ email: req.user ? req.user.email : null })
);

router.get("/logout", function (req, res) {
  req.logout();
  // res.redirect("/");
  res.send({});
});

module.exports = router;
