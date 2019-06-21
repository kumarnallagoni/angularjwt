const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var multer = require("multer");
const saltRounds = 10;

const videoschem = require("../models/videos");
const userdata = require("../models/userschema");
const loginschema = require("../models/loginschema");
const jwt = require("jsonwebtoken");
const isAuthenticate = require("./authenticatio");

console.log("execution start at 1");

var storage = multer.diskStorage({
  //multers disk storage settings
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    var datetimestamp = Date.now();
    cb(
      null,
      file.fieldname +
        "-" +
        datetimestamp +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  }
});
var upload = multer({
  //multer settings
  storage: storage
}).single("file");

router.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    res.json({ error_code: 0, err_desc: null });
  });
});

console.log("execution start at userdata 2");

//var videoschemss = new videoschems();

router.post("/userdata", (req, res) => {
  console.log(req.body);
  var pswd = req.body.userpassword;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    req.body.salt = salt;

    bcrypt.hash(pswd, salt, function(err, hash) {
      // Store hash in your password DB.
      req.body.userpassword = hash;

      userdata.create(req.body, (err, doc) => {
        if (err) {
          res.send("error occured");
        } else {
          res.send(doc);
        }
      });
    });
  });
});

console.log("execution start at login 3");

router.post("/login", (req, res) => {
  console.log("login route");
  console.log(req.body);

  var pswd = req.body.Userpassword;

  userdata.findOne({ usermail: req.body.Usermail }, function(err, doc) {
    if (doc != null) {
      bcrypt.hash(pswd, doc.salt, function(err, hash) {
        pswd = hash;

        userdata.findOne(
          { usermail: req.body.Usermail, userpassword: pswd },
          function(err, doc) {
            if (doc != null) {
              console.log("vinod==========");
              console.log(doc);
              var user = {
                username: doc.username,
                usermail: doc.usermail,
                uid: doc._id
              };
              var token = jwt.sign(user, "shhhh", {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
              });

              res.send({
                message: "userAuthenticated",
                status: true,
                token: token,
                userid: doc._id
              });
            } else {
              res.send({ message: "User not authenticated", status: false });
            }
          }
        );
      });
    } else {
      console.log("err", err);
      console.log("doc", doc);
      res.send({ message: "User not authenticated", status: false });
    }
  });
});

router.get("/videos", function(req, res) {
  var objs = {
    title: "Angular- by ram",
    url:
      "https://www.youtube.com/watch?v=CX9hdwfnlco&index=58&list=PLC3y8-rFHvwg5gEu2KF4sbGvpUqMRSBSW",
    description: "learn angular4444"
  };
  videoschem.find(function(err, doc) {
    if (err) {
      res.send("error occured");
    } else {
      //console.log(doc);
      res.json(doc);
    }
  });
});

router.use(function(req, res, next) {
  console.log("heloooooooooo check function");
  console.log("hello user data", req.headers);
  var token = req.headers.token;
  var uid = req.headers.uid;
  delete req.headers.token;

  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, "shhhh", function(err, decoded) {
      if (err) {
        return res.status(403).send({
          success: false,
          mCode: "expToken",
          message:
            "Failed to authenticate token------- Error: " + err + " URL: "
        });
      } else {
        console.log("vinod checking decoded", decoded);
        req.decoded = decoded;
        if (uid === decoded.uid) {
          console.log("user checking for uid and authenticated");
          next();
        } else {
          return res.status(403).send({
            success: false,
            mCode: "expToken",
            message:
              "Failed to authenticate token--- req from other userid." +
              " Auth UID: "
          });
        }
      }
    });
  } else {
    // if there is no token return an error
    return res.status(403).send({
      success: false,
      message: "No token provided."
    });
  }
});

router.get("/getuserdetails", (req, res) => {
  // api call to get all users data

  userdata.find(function(err, doc) {
    if (doc != null) {
      console.log("user enterd into responce secction");
      res.json(doc);
      console.log(doc);
    } else {
      console.log("error occured at server side");
      res.send(err);
    }
  });
});

module.exports = router;
