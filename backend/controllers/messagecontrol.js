// const Message = require('../models/messagemodels');

// exports.getMessages = async (req, res) => {
//   const messages = await Message.find().sort({ timestamp: 1 });
//   res.json(messages);
// };

// exports.sendMessage = async (req, res) => {
//   const { sender, content } = req.body;
//   const message = await Message.create({ sender, content });
//   res.status(201).json(message);
// };



const Message = require('../models/messagemodels');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 }).limit(500);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.postMessage = async (req, res) => {
  try {
    const { senderId, senderName, text } = req.body;
    if (!senderId || !text) return res.status(400).json({ msg: 'Missing fields' });
    const m = await Message.create({ senderId, senderName, text });
    res.status(201).json(m);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
