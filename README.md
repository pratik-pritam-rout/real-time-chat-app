# Real-Time Chat App

A production-ready full-stack real-time chat application built with the **MERN stack** and **Socket.io**.  
It features secure JWT authentication, real-time messaging, and cloud-based media storage.

---

## Tech Stack

### Frontend
- React (Vite)
- Axios
- Zustand (State Management)
- Tailwind / CSS
- Socket.io Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT Authentication
- Cloudinary (Media Storage)

---

## Features

- Secure JWT Authentication (Login / Signup)
- Real-time one-to-one messaging
- Online / Offline user status
- Image sharing support
- Cloud-based image upload via Cloudinary
- Theme support
- Fast and responsive UI

---
```
## Project Structure
root/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── lib/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── store/
│ │ └── lib/
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/real-time-chat-app.git
cd real-time-chat-app
```

2️⃣ Install Backend Dependencies
```
cd backend
npm install
```

3️⃣ Install Frontend Dependencies
```
cd ../frontend
npm install
```


4️⃣ Run the Application

Backend:

```
cd backend
npm run dev
```

Frontend:

```
cd frontend
npm run dev
```
📸 Screenshots

