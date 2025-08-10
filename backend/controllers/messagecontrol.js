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
