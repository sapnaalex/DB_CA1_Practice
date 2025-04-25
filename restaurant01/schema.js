const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
    dishName:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    menuItem: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'
    }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { Restaurant, MenuItem};