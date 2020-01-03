const mongoose = require("mongoose")
const Schema = mongoose.Schema
const { ServiceSchema } = require('./Service')
const { VehicleSchema } = require('./Vehicle')

const JobSchema = new Schema({
  servicesPerformed: [ServiceSchema],
  dateCompleted: {
     type: Date,
     default: Date.now(),
  },
  performedBy: String,
  timeTaken: String,
  cost: String,
  vehicle: VehicleSchema,
})

exports = module.exports = mongoose.model('Job', JobSchema )
