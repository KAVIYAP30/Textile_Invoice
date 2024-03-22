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

// Define schema for login
const loginSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  }
});

// Create a model for login details
const loginDetails = mongoose.model('loginDetails', loginSchema);

// Login route
app.post('/login', async (req, res) => {
  try {
      // Retrieve user with provided email
      const user = await loginDetails.findOne({ email: req.body.email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      // Compare passwords
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid password' });
      }
      // If email and password match, respond with success message or user data
      res.status(200).json({ message: 'Login successful', userData: user });
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
  }
});
