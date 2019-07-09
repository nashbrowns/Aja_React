const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
  type: { type: String, required: true },
  unit: {type: String, required: true},
  valueList: [
    
    {
        value: {type: Number, required: true},
        date: {type: Date, default: Date.now }
    }
  ]
});

const Sensor = mongoose.model("Sensor", sensorSchema);

module.exports = Sensor;