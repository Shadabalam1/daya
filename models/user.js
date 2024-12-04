const mongoose = require('mongoose'); // Mongoose ko import karein
const Schema = mongoose.Schema; // Schema ko define karein

// Schema create karein
const userSchema = new Schema({
  
  username: {
    type: String,
    required: true,
    unique: true,
  },
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Model banayein
const User = mongoose.model('User', userSchema);

module.exports = User;
