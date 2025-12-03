const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password : {
  type : String ,
  required : true,
  trim:true
  },
  phone: {
    type: String,
    trim: true
  },
  avatar: {
    type: String, // URL to avatar image stored in S3 or other storage
    default: null
  },
  roles: {
    type: [String], // e.g., ['admin', 'user']
    default: ['user']
  },
  permissions: {
    type: [String], // specific permissions if needed
    default: []
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;