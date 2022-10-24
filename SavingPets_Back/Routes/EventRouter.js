const express = require("express");
const eventRouter = express.Router();
const Event = require("../Models/EventModel");
const User = require("../Models/UserModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Images/Event");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jfif" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("le fichier doit etre jpeg, jfif, jpg ou png"), null, false);
  }
};

const image = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//http://localhost:9091/Event/getAll
eventRouter.route("/getAll").get((req, res) => {
  Event.find((err, events) => {
    if (err) {
      console.log(err)
      res.status(400).json(err);
    } else {
      res.status(200).json(events);
    }
  }).populate("user", "nom prenom ");
});

//http://localhost:9091/Event/addEvent/id
eventRouter.route("/addEvent/:idUser").post((req, res) => {
  User.findById(req.params.idUser ,(err,user)=>{
    const event = new Event({
      title: req.body.title,
      start: req.body.start,
      end: req.body.end,
      description: req.body.description,
      user: req.params.idUser,
    });
    if(err){
      res.status(400)
    } else {
      event.save();
      return res.status(200).json(event)
    }
  })
});

//http://localhost:9091/Event/ajouterEvent/idUser
eventRouter.route("/ajouterEvent/:idUser").post((req, res) => {
  User.findById(req.params.idUser ,(err,user)=>{
    const event = new Event({
      title: req.body.title,
      description: req.body.description,
      start: req.body.start,
      end: req.body.end,
      user: req.params.idUser,
    });
    if(err){
      res.status(400)
    } else {
      event.save();
      return res.status(200).json(event)
    }
  })
});

//http://localhost:9091/Event/Image/idEvent
eventRouter.route("/Image/:idEvent").put(image.single("image"), (req, res) => {
  Event.findById(req.params.idEvent, (err, event) => {
    event.image = req.file.originalname;
    event.save();
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(event);
    }
  });
});

//http://localhost:9091/Event/update/idEvent
eventRouter.route("/update/:idEvent").put((req, res) => {
  Event.findById(req.params.idEvent, (err, event) => {
    if (event) {
      event.title = req.body.title,
      event.description = req.body.description,
      event.start = req.body.start,
      event.end = req.body.end,
      event.date = new Date().toLocaleDateString();
      event.save();
      res.status(200);
    } else {
        event = new Event(req.body);
        event.save();
      res.status(201);
    }
    res.json(event);
  });
});

//http://localhost:9091/event/getById/idEvent
eventRouter.route("/getById/:idEvent").get((req, res) => {
    Event.findById(req.params.idEvent, (err, event) => {
    if (err) {
      res.status(401).json(err);
      console.log(err);
    } else {
      res.status(200).json(event);
    }
  }).populate("user", "nom prenom");
});

//http://localhost:9091/event/getByUserId/idUser
eventRouter.route("/getByUserId/:idUser").get((req, res) => {
    Event.find({user: req.params.idUser}, (err,  event) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.json( event);
    }
  }).populate("user", "nom prenom");
});

//http://localhost:9091/event/delete/idEvent
eventRouter.route("/delete/:idEvent").delete((req, res) => {
    Event.findByIdAndDelete((req.params.idEvent),(err,  event) => {
    if(err){
      res.status(400).json(err);
    } 
  });
});

//http://localhost:9091/Event/CountEventByIdUser/idEvent
eventRouter.route("/CountEventByIdUser/:idUser").get((req, res) => {
    Event.count({user: req.params.idUser},(err, number) => {
        if(err){
            res.Status(400) 
        } else {
            return res.status(200).json(number);
        }
    });
});

//http://localhost:9091/Event/CountEvent
eventRouter.route("/CountEvent").get((req, res) => {
    Event.count({},(err, number) => {
        if(err){
            res.Status(400) 
        } else {
            return res.status(200).json(number);
        }
    });
});

//http://localhost:9091/Event/LikeEvent/idEvent
// eventRouter.route("/LikeEvent/:idEvent").put((req, res) => {
//   Event.findByIdAndUpdate(req.params.idEvent,{},{ new: true },(err, event) => {
//     if(err){
//       res.status(400) 
//     } else {
//       event.like = event.like + 1;
//       event.save();
//       res.status(200).json(event);
//     }
//   });
// });

//http://localhost:9091/Event/disLikeEvent/idEvent
// eventRouter.route("/disLikeEvent/:idEvent").put((req, res) => {
//   Event.findByIdAndUpdate(req.params.idEvent,{},{ new: true },(err, event) => {
//     if(err){
//       res.status(400) 
//     } else {
//       event.like = event.like - 1;
//       event.save();
//       res.status(200).json(event);
//     }
//   });
// });



module.exports = eventRouter;
