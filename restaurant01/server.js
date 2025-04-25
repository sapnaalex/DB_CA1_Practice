require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB error:', err));


app.get('/', (req, res)=>{
    res.send('Welcome to the Restaurant');
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});