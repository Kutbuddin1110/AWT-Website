const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  image: String,
  type: String,
  year: String,
  area: String,
  status: String,
  details: [String]
});

module.exports = mongoose.model("Project", projectSchema);
