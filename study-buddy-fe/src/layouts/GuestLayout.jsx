import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto p-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 mb-6 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">Dashboard sebagai Tamu</h1>
          <p className="mt-2 text-slate-600">
            Kamu dapat melihat tampilan dashboard dan mencoba fitur secara visual. Untuk mengaktifkan semua fungsi, silakan login.
          </p>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
