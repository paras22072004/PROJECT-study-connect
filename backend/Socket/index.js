const Message = require('../models/messagemodels');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

 
    socket.on('sendMessage', async (data) => {
 
      try {
        const saved = await Message.create({
          senderId: data.senderId,
          senderName: data.senderName,
          text: data.text
        });
        io.emit('newMessage', saved);
      } catch (err) {
        console.error('socket save message error', err);
      }
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected:', socket.id);
    });
  });
};
