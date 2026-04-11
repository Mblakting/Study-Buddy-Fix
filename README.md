<div align="center">

# 📚 StudyBuddy

**Platform manajemen belajar fullstack untuk mahasiswa modern.**

[![Laravel](https://img.shields.io/badge/Laravel-10-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[Demo](#) · [Laporan Bug](issues) · [Request Fitur](issues)

</div>

---

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| 🔐 **Autentikasi** | Register, login, logout dengan Laravel Sanctum (token-based) |
| ✅ **Manajemen Tugas** | Tambah, selesaikan, dan hapus tugas dengan animasi halus |
| 📝 **Catatan Cepat** | Simpan catatan belajar langsung di browser |
| ⏱️ **Focus Timer** | Pomodoro 25 menit dengan progress bar real-time |
| 📊 **Rekap Statistik** | Visualisasi progress tugas harian |
| 🌙 **Dark / Light Mode** | Mengikuti preferensi sistem, bisa di-toggle manual |
| 📱 **Responsif** | Tampilan optimal di desktop, tablet, dan mobile |
| 👤 **Mode Tamu** | Akses dashboard tanpa login (fitur terbatas) |

---

## 🛠️ Tech Stack

**Backend**
- PHP 8.1+ · Laravel 10 · Laravel Sanctum
- MySQL · RESTful API

**Frontend**
- React 19 · Vite 8 · React Router 7
- Tailwind CSS 4 · Framer Motion · Lucide React

---

## 🚀 Instalasi & Menjalankan

### Prerequisites

Pastikan sudah terinstal:
- **PHP** ≥ 8.1 & **Composer**
- **Node.js** ≥ 18 & **npm**
- **MySQL**

---

### 1. Clone Repository

```bash
git clone https://github.com/username/study-buddy-fullstack.git
cd study-buddy-fullstack
```

---

### 2. Setup Backend (Laravel)

```bash
cd study-buddy-be

# Install dependencies
composer install

# Salin file environment
cp .env.example .env

# Generate app key
php artisan key:generate
```

Edit file `.env`, sesuaikan koneksi database:

```env
DB_DATABASE=studybuddy
DB_USERNAME=root
DB_PASSWORD=your_password
```

```bash
# Buat database, lalu jalankan migrasi
php artisan migrate

# Jalankan server
php artisan serve
```

> Backend berjalan di `http://localhost:8000`

---

### 3. Setup Frontend (React)

```bash
cd ../study-buddy-fe

# Install dependencies
npm install
```

Pastikan file `.env` sudah ada (sudah tersedia di repo):

```env
VITE_API_URL=http://localhost:8000/api
```

```bash
# Jalankan development server
npm run dev
```

> Frontend berjalan di `http://localhost:5173`

---

## 📁 Struktur Proyek

```
study-buddy-fullstack/
├── study-buddy-be/                 # Backend Laravel
│   ├── app/
│   │   ├── Http/Controllers/
│   │   │   ├── AuthController.php  # Register, Login, Logout
│   │   │   └── TaskController.php  # CRUD Tugas
│   │   └── Models/
│   │       ├── User.php
│   │       └── Task.php
│   ├── database/migrations/        # Skema database
│   ├── routes/api.php              # Definisi API routes
│   └── .env.example
│
├── study-buddy-fe/                 # Frontend React
│   └── src/
│       ├── api/axios.js            # Axios instance + interceptors
│       ├── context/ThemeContext.jsx
│       ├── layouts/                # MainLayout, GuestLayout
│       ├── pages/                  # Landing, Login, Register, Dashboard
│       ├── services/               # authService, taskService
│       └── components/             # Navbar, TaskItem
│
└── README.md
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:8000/api`

### Auth

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| `POST` | `/signup` | ❌ | Registrasi akun baru |
| `POST` | `/login` | ❌ | Login, mendapat Bearer token |
| `POST` | `/logout` | ✅ | Logout, revoke token |

### Tasks

| Method | Endpoint | Auth | Deskripsi |
|--------|----------|------|-----------|
| `GET` | `/tasks` | ✅ | Ambil semua tugas milik user |
| `POST` | `/tasks` | ✅ | Buat tugas baru |
| `GET` | `/tasks/{id}` | ✅ | Detail satu tugas |
| `PUT` | `/tasks/{id}` | ✅ | Update tugas |
| `DELETE` | `/tasks/{id}` | ✅ | Hapus tugas |

> Semua endpoint bertanda ✅ memerlukan header: `Authorization: Bearer <token>`

---

## 🗄️ Skema Database

```
users
├── id (PK)
├── name
├── email (unique)
├── password (hashed)
└── timestamps

tasks
├── id (PK)
├── title
├── description (nullable)
├── completed (boolean, default: false)
├── deadline (date, nullable)
├── user_id (FK → users.id, cascade delete)
└── timestamps
```

---

## 🏗️ Build untuk Production

**Frontend:**
```bash
cd study-buddy-fe
npm run build
# Output ada di folder dist/
```

**Backend:**
```bash
cd study-buddy-be
# Set APP_ENV=production dan APP_DEBUG=false di .env
php artisan config:cache
php artisan route:cache
php artisan optimize
```

---

## 🧪 Testing

**Backend:**
```bash
cd study-buddy-be
php artisan test
```

**Frontend (lint):**
```bash
cd study-buddy-fe
npm run lint
```

---

## 🤝 Kontribusi

1. Fork repository ini
2. Buat branch fitur: `git checkout -b feature/nama-fitur`
3. Commit: `git commit -m 'feat: tambah fitur X'`
4. Push: `git push origin feature/nama-fitur`
5. Buat Pull Request

---

## 📄 Lisensi

Proyek ini menggunakan lisensi **MIT**. Lihat file [LICENSE](LICENSE) untuk detail.

---

<div align="center">
  <p>Dibuat dengan ❤️ oleh <strong>CC26-PS048</strong></p>
  <p><sub>© 2026 StudyBuddy Team</sub></p>
</div>
