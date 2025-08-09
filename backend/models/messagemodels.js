// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   sender: String,
//   content: String,
//   timestamp: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Message', messageSchema);



const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  senderName: { type: String },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
