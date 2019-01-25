const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    make: String,
    model: String,
    year: Number
});

vehicleSchema.pre('save', async function(next) {
    const vehicle = this;
    try {
      //CODE BLOCK HERE
      next();
    } catch (err) {
      return next(err);
    }
  });

  exports = module.exports = mongoose.model("Vehicle", vehicleSchema);

