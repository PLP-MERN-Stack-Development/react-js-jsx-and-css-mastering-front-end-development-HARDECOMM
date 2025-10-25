# LIVE APP
https://task-manager-react-haruna-ademoyes-projects.vercel.app/
---

# PLP Task Manager

A responsive task management app built with React and Tailwind CSS as part of the PLP Front-End Development assignment. It allows users to manage tasks, switch themes, and view external data from a public API.

---

## 🚀 Features

### ✅ Task Management
- Add, complete, and delete tasks
- Filter tasks by status: All, Active, Completed
- Tasks persist using localStorage

### 🌐 API Integration
- Fetches posts from JSONPlaceholder
- Displays data with pagination and search
- Handles loading and error states

### 🎨 Styling with Tailwind CSS
- Responsive design for mobile, tablet, and desktop
- Theme switcher (light/dark mode)
- Utility classes for layout, spacing, typography, and colors
- Custom animations and transitions for interactive elements

---

## 🧱 Component Architecture

- `Button`: Reusable with variants (`primary`, `secondary`, `danger`)
- `Card`: Boxed layout for content display
- `Navbar`: Site navigation with theme toggle
- `Footer`: Copyright and links
- `Layout`: Wraps `Navbar`, `Footer`, and main content

---

## ⚙️ Hooks Used

- `useState`: For managing component state
- `useEffect`: For syncing tasks and fetching API data
- `useContext`: For theme management
- `useLocalStorageTasks`: Custom hook for persisting tasks

---

## 📦 Installation

```bash
npm install
npm start
🛠 Technologies
React

Tailwind CSS

Axios

JSONPlaceholder API

📁 Folder Structure
Code
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── PostList.jsx
│   └── TaskManager.jsx
├── hooks/
│   └── useLocalStorageTasks.js
├── context/
│   └── ThemeContext.jsx
├── App.jsx
├── index.css
└── app.css

📄 License
This project is for educational purposes under the PLP program.
