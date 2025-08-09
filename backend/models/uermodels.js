// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ['teacher', 'student'] },
// });

// module.exports = mongoose.model('User', userSchema);



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher'], default: 'student' }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
