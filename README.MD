# 🩺 Doctor Appointment Booking App

A full-stack web application for booking and managing doctor appointments, built using the **MERN Stack** (MongoDB, Express, React, Node.js) and styled with **Tailwind CSS**. It features role-based dashboards for Patients, Doctors, and Admins, with secure JWT authentication and real-time scheduling.

---

## 🚀 Live Demo

👉 [Visit the Live App](https://prescripto-nine-zeta.vercel.app/)

---

## 👥 User Roles

### 👤 Patient
- Register and log in
- Browse doctors and book appointments
- View and manage existing appointments

### 👨‍⚕️ Doctor
- Log in to a dedicated doctor dashboard
- View and manage appointments
- Update profile and availability
- Track earnings

### 🛠 Admin
- Manage all users (doctors & patients)
- Approve/reject doctor accounts
- View and manage all appointments

---

## ✨ Key Features

- 🔐 JWT Authentication & role-based access control
- 📅 Real-time doctor availability and booking
- 💳 Integrated secure payment system (optional)
- 📱 Responsive UI with **Tailwind CSS**
- ⚙️ RESTful APIs built with Express.js
- 🧾 Clean, modular folder structure for scalability

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Axios
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing


---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/doctor-appointment-app.git
cd doctor-appointment-app

2. **Setup backend**
cd backend
npm install

#Create a .env file inside /backend and add:*
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

#start backend server
npm start

3. **Setup Frontend **
cd ../frontend
npm install

#Create a .env file inside /frontend and add:
VITE_BACKEND_URL=http://localhost:4000

#Start the frontend:
npm run dev

4.**Setup Admin Panel**
cd ../admin
npm install
npm run dev


## 📢 Connect With Me
Let’s connect and collaborate!
📧 Email: vinayp.techdev@email.com
🔗 [LinkedIn](https://www.linkedin.com/in/vinay-p-ba030a322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)






