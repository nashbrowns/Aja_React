const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  MAC: { type: String, required: true, unique: true },
  sensorList:[
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Sensor model
      ref: "Sensor"
    }
  ],
  controlList: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Control model
      ref: "Control"
    }
  ]
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;