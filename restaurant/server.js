require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const MenuItem = require("./models/MenuItem");
const Restaurant = require("./models/Restaurant");
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('MongoDB connected.'))
.catch(err => console.error('MongoDB error: ', err));

app.get('/', (req, res)=>{
    res.send('Restaurant is now Live');
});

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});