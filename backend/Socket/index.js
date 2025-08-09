// module.exports = (io) => {
//   io.on('connection', (socket) => {
//     console.log('New client connected:', socket.id);

//     socket.on('sendMessage', (data) => {
//       io.emit('receiveMessage', data); 
//     });

//     socket.on('disconnect', () => {
//       console.log('Client disconnected:', socket.id);
//     });
//   });
// };


const Message = require('../models/messagemodels');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    // receive message from client and broadcast + save
    socket.on('sendMessage', async (data) => {
      // data: { senderId, senderName, text }
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
