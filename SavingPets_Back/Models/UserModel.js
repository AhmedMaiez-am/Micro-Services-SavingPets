const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String },
  tel: { type: String },
  cin: { type: String, required: true },
  dateNaissance: { type: String, default: new Date().toISOString() },
  mdp: { type: String, default: new Date().toISOString() },
  confirmMdp: { type: String ,default: new Date().toISOString() },
  accessToken: [{ type: String, default: "" }],

  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

module.exports = mongoose.model("User", userModel);
