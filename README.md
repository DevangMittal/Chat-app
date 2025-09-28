# 💬 Chat-App

A modern, real-time chat application built with the MERN stack, featuring instant messaging, user authentication, and a beautiful user interface.

![Chat App Demo](https://img.shields.io/badge/Live%20Demo-chat--app--ashen--zeta.vercel.app-blue)
![GitHub stars](https://img.shields.io/github/stars/DevangMittal/Chat-app)
![GitHub forks](https://img.shields.io/github/forks/DevangMittal/Chat-app)
![GitHub license](https://img.shields.io/github/license/DevangMittal/Chat-app)

## ✨ Features

- 🔐 **User Authentication** - Secure registration and login system
- 💬 **Real-time Messaging** - Instant message delivery using Socket.io
- 👥 **Multi-user Support** - Chat with multiple users simultaneously
- 🎨 **Modern UI/UX** - Beautiful and responsive design
- 📱 **Mobile Friendly** - Works seamlessly on all devices
- 😊 **Emoji Support** - Express yourself with emojis
- 🔔 **Toast Notifications** - Real-time notification system
- 🎭 **Avatar Support** - Set custom avatars for users

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Emoji Picker React** - Emoji support

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Live Demo

Experience the app live at: [chat-app-ashen-zeta.vercel.app](https://chat-app-teal-beta.vercel.app/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download) (v14 or higher)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) (v4.4 or higher)
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/DevangMittal/Chat-app.git
cd Chat-app
```

### 2. Environment Setup
Navigate to the Back directory and set up environment variables:
```bash
cd Back
# Create .env file (copy from .env.example if available)
touch .env
```

Add the following to your `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret_key
```

### 3. Install Dependencies

**Backend Dependencies:**
```bash
cd Back
npm install
```

**Frontend Dependencies:**
```bash
cd ../Front
npm install
```

### 4. Start the Application

**Start MongoDB:**
Make sure MongoDB is running on your system.

**Start Backend Server:**
```bash
cd Back
npm start
# or
nodemon index.js
```

**Start Frontend Development Server:**
```bash
# Open a new terminal
cd Front
npm start
```

### 5. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
Chat-app/
├── Back/                    # Backend directory
│   ├── controllers/         # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json
├── Front/                   # Frontend directory
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main App component
│   └── package.json
├── README.md
└── vercel.json             # Vercel deployment config
```

## 🎯 Usage

1. **Register**: Create a new account with username, email, and password
2. **Set Avatar**: Choose or upload a profile picture
3. **Start Chatting**: Select a contact and start messaging
4. **Real-time**: Messages are delivered instantly
5. **Multi-user**: Chat with multiple users simultaneously

## 🚀 Deployment

The application is deployed on Vercel and can be accessed at:
[chat-app-ashen-zeta.vercel.app](https://chat-app-ashen-zeta.vercel.app)

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Devang Mittal**
- GitHub: [@DevangMittal](https://github.com/DevangMittal)
- Project Link: [https://github.com/DevangMittal/Chat-app](https://github.com/DevangMittal/Chat-app)

## 🙏 Acknowledgments

- Socket.io for real-time communication
- React team for the amazing framework
- MongoDB for the database solution
- All the open-source contributors

---

⭐ If you found this project helpful, please give it a star!
