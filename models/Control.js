const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const controlSchema = new Schema({
  type: { type: String, required: true },
  Operating: { type: Boolean, required: true}
});

const Control = mongoose.model("Control", controlSchema);

module.exports = Control;