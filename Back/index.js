const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

// CORS configuration for production
const corsOptions = {
	origin: function (origin, callback) {
		// Allow requests with no origin (mobile apps, Postman, etc.)
		if (!origin) return callback(null, true);
		
		const allowedOrigins = [
			process.env.FRONTEND_URL || "http://localhost:3000",
			"https://chat-app-teal-beta.vercel.app",
			"https://chat-app-teal-beta.vercel.app/",
			"http://localhost:3000"
		];
		
		if (allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
	{
		console.log("DB Connetion Successfull");
	})
	.catch((err) =>
	{
		console.log(err.message);
	});

// Health check endpoint for Render
app.get("/", (req, res) => {
	res.json({ message: "Chat App Backend is running!", status: "OK" });
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
	console.log(`Server started on ${PORT}`)
);
const io = socket(server, {
	cors: {
		origin: [
			process.env.FRONTEND_URL || "http://localhost:3000",
			"https://chat-app-teal-beta.vercel.app",
			"https://chat-app-teal-beta.vercel.app/",
			"http://localhost:3000"
		],
		credentials: true,
	},
});

global.onlineUsers = new Map();
io.on("connection", (socket) =>
{
	global.chatSocket = socket;
	socket.on("add-user", (userId) =>
	{
		onlineUsers.set(userId, socket.id);
	});

	socket.on("send-msg", (data) =>
	{
		const sendUserSocket = onlineUsers.get(data.to);
		if (sendUserSocket) {
			socket.to(sendUserSocket).emit("msg-recieve", data.msg);
		}
	});
});
