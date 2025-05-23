const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    menuItem:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'
    }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
