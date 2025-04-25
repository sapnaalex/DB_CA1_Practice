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

module.exports = mongoose.model("MenuItem", MenuItemSchema);