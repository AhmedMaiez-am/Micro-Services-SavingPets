const express = require("express");
const contactRouter = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const User = require("../Models/UserModel");

app.use(cors());

//http://localhost:9091/Contact
contactRouter.route("/").post((req, res) => {
  /*const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user: req.body.email,
      pass: req.body.pass,
    }
  });*/
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e2e4c0911d9792",
      pass: "0ae8378ab2ea80",
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: "arij.zitouni@esprit.tn",
    subject: req.body.sujet,
    text: req.body.message,
  };
  /*transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
        res.status(500).json(err)
      } else {
        console.log('Email sent : ' + info.response);
        res.status(200).json(mailOptions);
      }
    });*/
  transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json(err);
    } else {
      console.log("Email sent : " + info.response);
      res.status(200).json(mailOptions);
    }
  });
});

//http://localhost:9091/Contact/send
contactRouter.route("/send").post((req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arij.zitouni@esprit.tn",
      pass: "203JFT0601",
    },
  });
  /*var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e2e4c0911d9792",
      pass: "0ae8378ab2ea80",
    },
  });*/
  const mailOptions = {
    from: "arij.zitouni@esprit.tn",
    to: req.body.email,
    subject: "Forgot Password !",
    text: "vous pouver visitez ce site la : http://localhost:4200/home/login/updateMDP",
  };
  /*transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      res.status(500).json(err)
    } else {
      console.log('Email sent : ' + info.response);
      res.status(200).json(mailOptions);
    }
  });*/
  User.findOne({ email: req.body.email }).exec((err, u) => {
    if (u) {
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        } else {
          console.log("Email sent : " + info.response);
          res.status(200).json(mailOptions);
        }
      });
    } else {
      res.status(404).json(err);
    }
  });
});

module.exports = contactRouter;
