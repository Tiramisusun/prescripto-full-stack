
# Prescripto — Doctor Appointment Booking (Full-stack)

A full-stack app to browse doctors, view details, and book appointments with JWT-secured authentication and basic admin management.

**Frontend:** React + Vite + Tailwind + React Router
**Backend:** Node.js + Express + MongoDB + JWT
**Assets:** Cloudinary

---

## ✨ Features

* Browse doctors by speciality; doctor detail + related doctors
* User registration & login (JWT), protected routes
* Time-slot generation (10:00–21:00, 30-min steps), double-booking prevention
* View “My Appointments”
* Admin foundation (manage doctors / availability)

---

## 📁 Project Structure

```
prescripto-full-stack/
├─ frontend/                 # React + Vite
├─ backend/                  # Express + MongoDB
├─ README.md
├─ .gitignore
├─ package.json              # optional root scripts (concurrently)
├─ frontend/.env.example
└─ backend/.env.example
```

---

## ⚙️ Environment Variables

**backend/.env.example**

```bash
# Server
PORT=4000
JWT_SECRET=change_me

# MongoDB (Atlas)
MONGODB_URI=<your_address>

# Cloudinary
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
```

**frontend/.env.example**

```bash
VITE_BACKEND_URL=http://localhost:4000
```

> Copy these to `.env` files and fill real values. **Do not commit** real `.env`.



## ☁️ Cloudinary Setup

1. Sign up / log in: [https://cloudinary.com/](https://cloudinary.com/)
2. From **Dashboard**, note your:

   * **Cloud name**
   * **API Key**
   * **API Secret**
3. Put them into **`backend/.env`**:

   ```
   CLOUDINARY_CLOUD_NAME=xxx
   CLOUDINARY_API_KEY=xxx
   CLOUDINARY_API_SECRET=xxx
   ```
4. Your backend’s Cloudinary init (`connectCloudinary`) will use these to upload and serve images.

> Tip: Use separate resources/folders for dev vs prod.

---

## 🍃 MongoDB Atlas Setup

1. Create a free cluster: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a **Database User** (Database Access) — keep username/password.
3. Add **Network Access** (IP allow list). For local dev you can use `0.0.0.0/0` (tighten for prod).
4. In **Databases → Connect → Drivers**, copy the connection string:

   ```
   mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
   ```
5. Paste it into **`backend/.env`** as `MONGODB_URI`.

---

## 🚀 Quick Start

### 0) Clone & Install

```bash
git clone https://github.com/
cd prescripto-full-stack

# env templates → real envs
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
# fill values in both .env files

# install deps
npm --prefix backend i
npm --prefix frontend i
```

### 1) Run (two terminals)

```bash
# Terminal A — backend
cd backend
npm run dev   # e.g., nodemon server.js → http://localhost:4000

# Terminal B — frontend
cd frontend
npm run dev   # Vite → http://localhost:5173
```

**Optional one-command dev (root):**

```bash
npm i -D concurrently
# package.json (root):
# "scripts": {
#   "dev:backend": "npm --prefix backend run dev",
#   "dev:frontend": "npm --prefix frontend run dev",
#   "dev": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\""
# }
npm run dev
```
