const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);
const ProjectDetailsScehma = new mongoose.Schema({
  name: String,
  details: String,
  Success: String,
  sensors: Array,
  val: String,
});
const User = mongoose.model("UserInfo", UserDetailsScehma);
const Project = mongoose.model("ProjectInfo", ProjectDetailsScehma);

module.exports = {
  User,
  Project,
};
