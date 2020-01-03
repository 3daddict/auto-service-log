const mongoose = require("mongoose")
const Schema = mongoose.Schema

const VehicleSchema = new Schema({
  make: {
    type: String,
    lowercase: true
  },
  model: {
    type: String,
    lowercase: true
  },
  year: {
    type: Number,
  },
})

exports = module.exports = mongoose.model('Vehicle', VehicleSchema )
exports.VehicleSchema = VehicleSchema