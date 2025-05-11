# 🖌️ Real-Time Whiteboard with FastAPI & WebSockets

This is a simple real-time collaborative whiteboard built with **FastAPI** and **WebSockets** on the backend, and a **vanilla HTML/JS** frontend using the `<canvas>` element.

Users can draw together in real time by connecting to a shared global canvas. Just open the page, pick a color, and start drawing!

---

## ✨ Features

- 🔌 Real-time communication with WebSockets  
- 🎨 Color picker for drawing  
- 👥 Shared global whiteboard across all users  
- 🧼 Lightweight and easy to understand code  

---

## 🚀 Getting Started

### 📦 Requirements

- Python 3.8+  
- pip

---

### 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/fastapi-whiteboard.git
cd fastapi-whiteboard
```

2. **Create a virtual environment (optional but recommended)**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install fastapi uvicorn
```

---

## ▶️ Running the App

1. **Start the FastAPI server**

```bash
uvicorn main:app --reload
```

2. **Open the frontend**

Open the `index.html` file directly in your browser.

> 💡 If you serve `index.html` with a local server (e.g. VS Code Live Server or `python -m http.server`), make sure the WebSocket URL in your JS code points to the correct `ws://localhost:8000/ws`.

---

## 📁 Project Structure

---
fastapi-whiteboard/
├── main.py           # FastAPI app with WebSocket endpoint
├── index.html        # Frontend: HTML + JS canvas
└── README.md         # Project documentation
---

---

## 🧠 How It Works

- Each user connects to the WebSocket endpoint `/ws/canvas`.  
- When a user draws, the canvas sends drawing data (coordinates and color) to the server.  
- The server then broadcasts that data to all other connected users.  
- All users see the same drawing in real time.  

---

## 📸 Preview

![preview](https://user-images.githubusercontent.com/your-username/preview.gif)  
*Real-time drawing with multiple users.*

---

## 📜 License

MIT License — feel free to use, modify, and share!

---

## 🤝 Contributing

Pull requests and feedback are welcome. Let’s build cool real-time stuff together!
