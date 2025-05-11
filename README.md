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

## 🔧 Backend Setup (FastAPI)

1. **Navigate to the backend folder**

```bash
cd backend
```

2. **Create and activate a virtual environment**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Run the FastAPI server**

```bash
uvicorn main:app --reload
```

The backend will run by default at `http://localhost:8000`.

```

## 🌐 Frontend Setup

1. **Open the `frontend/index.html` file directly in your browser**

Or, if you prefer using a local server (recommended for CORS/WebSocket behavior):

```bash
cd frontend
python -m http.server 5500
```

Then go to `http://localhost:5500` in your browser.

> ⚠️ Make sure the WebSocket URL in your JS file points to `ws://localhost:8000/ws`.

---

## 🧠 How It Works

- Each user connects to the WebSocket endpoint `/ws`.
- The canvas captures drawing data (coordinates and color) and sends it to the backend.
- The server broadcasts the data to all connected clients in real time.
- All users see the same global drawing live.

---

## 📜 License

MIT License — feel free to use, modify, and share!

---

## 🤝 Contributing

Pull requests and feedback are welcome. Let’s build cool real-time stuff together!
