const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const UserSchema = new Schema({
    userName:       { type: String,  required: true },
    password:       { type: String,  required: true },
    avatar:         { type: String },
    firstName:      { type: String,  required: true },
    lastName:       { type: String,  required: true },
    info:           { type: String,  required: false },
    title:          { type: String,  required: true },
    email:          { type: String,  required: true },
    date:           { type: Date,    default: Date.now }
}); 

module.exports = User = mongoose.model('users', UserSchema);