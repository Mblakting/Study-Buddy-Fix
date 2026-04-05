# Study Buddy Fullstack

Proyek Study Buddy adalah aplikasi fullstack yang terdiri dari backend Laravel dan frontend React untuk membantu mahasiswa dalam mengelola tugas dan jadwal belajar.

## Fitur Utama

- Manajemen tugas (CRUD)
- Sistem autentikasi pengguna
- Antarmuka web responsif dengan Tailwind CSS
- API RESTful untuk integrasi

## Prerequisites

Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:

- **PHP** versi 8.1 atau lebih tinggi
- **Composer** untuk dependency management PHP
- **Node.js** versi 16 atau lebih tinggi
- **npm** atau **yarn** untuk dependency management JavaScript
- **MySQL** atau database lainnya yang didukung Laravel

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/study-buddy-fullstack.git
cd study-buddy-fullstack
```

### 2. Setup Backend (Laravel)

```bash
cd study-buddy-be

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Setup database
# Edit file .env untuk mengatur koneksi database
# Kemudian jalankan:
php artisan migrate
php artisan db:seed  # Jika ada seeder
```

### 3. Setup Frontend (React/Vite)

```bash
cd ../study-buddy-fe

# Install Node.js dependencies
npm install

# Copy environment file jika ada
cp .env.example .env  # Jika ada
```

## Menjalankan Aplikasi

### Backend

```bash
cd study-buddy-be
php artisan serve
```

Server backend akan berjalan di `http://localhost:8000`

### Frontend

```bash
cd study-buddy-fe
npm run dev
```

Aplikasi frontend akan berjalan di `http://localhost:5173` (default Vite)

## Struktur Proyek

```
study-buddy-fullstack/
├── study-buddy-be/          # Backend Laravel
│   ├── app/                 # Kode aplikasi Laravel
│   ├── database/            # Migrations dan seeders
│   ├── routes/              # Definisi routes
│   └── ...
├── study-buddy-fe/          # Frontend React
│   ├── src/                 # Kode sumber React
│   ├── public/              # Asset statis
│   └── ...
└── README.md                # Dokumentasi ini
```

## API Endpoints

Backend menyediakan API endpoints berikut:

- `GET /api/tasks` - Mendapatkan semua tugas
- `POST /api/tasks` - Membuat tugas baru
- `PUT /api/tasks/{id}` - Update tugas
- `DELETE /api/tasks/{id}` - Hapus tugas
- `POST /api/login` - Login pengguna
- `POST /api/register` - Registrasi pengguna

## Testing

### Backend

```bash
cd study-buddy-be
php artisan test
```

### Frontend

```bash
cd study-buddy-fe
npm run test
```

## Deployment

Untuk deployment production:

1. Setup server dengan PHP dan Node.js
2. Konfigurasi web server (Apache/Nginx) untuk Laravel
3. Build frontend: `npm run build` di folder study-buddy-fe
4. Upload file build ke server

## Kontribusi

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## Kontak

Jika ada pertanyaan, silakan buat issue di repository GitHub ini.