const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const port = 9010;
const url = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    // Start the server after successful connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

  
//signup
const signUpSchema = new mongoose.Schema(
    {
        email:String,
        password:String,
    }
)
const signUpDetails = mongoose.model('signupDetails',signUpSchema);
app.post('/signup',async(req,res)=>
{
    try{
        const signUpData = new signUpDetails(
            {
                email:req.body.email,
                password:await bcrypt.hash(req.body.password, 10),
            }
        );
        await signUpData.save();
        res.status(201).json("signup Successfully");
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
})

