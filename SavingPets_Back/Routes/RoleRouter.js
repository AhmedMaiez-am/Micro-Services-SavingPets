const express = require("express");
const roleRouter = express.Router();
const Role = require("../Models/RoleModel");

roleRouter.route("/add")
//http://localhost:9091/Role/add
.post((req, res) => {
    let role = new Role(req.body);
    role.nom = req.body.nom
    role.save()
    res.status(201).send("Role Ajouté avec Succès :)")
});

module.exports = roleRouter