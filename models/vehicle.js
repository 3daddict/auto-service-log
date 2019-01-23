const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    make: String,
    model: String,
    year: Number
});

module.exports = mongoose.model('Vehicle', vehicleSchema);