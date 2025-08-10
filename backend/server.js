require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const connectDB = require('./Config/db');

const app = express();
const server = http.createServer(app);
const { Server } = require('socket.io');

connectDB();

app.use(cors());
app.use(express.json());


app.use('/api/auth', require('./Routes/UserRoute'));
app.use('/api/messages', require('./Routes/MessageRoute'));


const io = new Server(server, {
  cors: { origin: '*' } 
});
require('./Socket')(io);


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on ${PORT}`));
