import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-800 to-indigo-600 text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 ring-1 ring-white/20">
            Selamat datang di StudyBuddy
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Belajar lebih fokus, tetap teratur, dan capai tujuanmu.
          </h1>
          <p className="max-w-xl text-slate-200 text-lg leading-relaxed">
            Masuk untuk mengakses semua fitur belajar, atau langsung coba tampilan dashboard sebagai tamu tanpa fungsionalitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-3xl bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-lg shadow-slate-900/10 transition hover:bg-slate-100"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-3xl border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white transition hover:bg-white/20"
            >
              Coba Fitur
            </Link>
          </div>
        </div>

        <div className="rounded-[40px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl shadow-slate-950/20">
          <div className="mb-8 space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-semibold text-indigo-100">
              Apa yang bisa dilakukan?
            </span>
            <h2 className="text-3xl font-semibold">Fitur utama yang siap membantu</h2>
          </div>

          <div className="space-y-4 text-slate-100">
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold">Dashboard Tugas</p>
              <p className="text-sm text-slate-300">Lihat tampilan, atur tugas, dan nikmati pengalaman organisasi belajarmu.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold">Mode Tamu</p>
              <p className="text-sm text-slate-300">Coba fitur tampilan tanpa login. Login untuk mengaktifkan semua fungsi.</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold">Akses cepat</p>
              <p className="text-sm text-slate-300">Login saat siap, atau langsung lihat dashboard sebagai pengunjung.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
