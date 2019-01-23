const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vehicle = require('../models/vehicle');

router.get('/vehicles', (req, res, next) => {
    res.status(200).json({
        message: "Handeling GET requests to /vehicles"
    });
});

router.post('/', (req, res, next) => {
    const vehicle = new Vehicle({
        _id: new mongoose.Types.ObjectId(),
        make: req.body.make,
        model: req.body.model,
        year: req.body.year
    });
    //store the entry to the database
    vehicle.save()
    .then(result => console.log(result))
    .catch(err => console.log(err));

    res.status(201).json({
        message: 'Handeling POST requests to /vehicles',
        // addVehicle: vehicle
    });
});