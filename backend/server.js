// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const http = require('http');
// const connectDB = require('./Config/db');

// dotenv.config();
// const app = express();
// const server = http.createServer(app);

// // Connect DB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./Routes/UserRoute'));
// app.use('/api/messages', require('./Routes/MessageRoute'));

// // Socket
// const socketIO = require('socket.io')(server, {
//   cors: { origin: "*" }
// });
// require('./Socket')(socketIO);

// // Start server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));




require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');

connectDB();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('./Routes/UserRoute'));
app.use('/api/messages', require('./Routes/MessageRoute'));

// Socket.IO
const io = new Server(server, {
  cors: { origin: '*' } // replace '*' with frontend origin in production
});
require('./socket')(io);

// Start
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on ${PORT}`));
