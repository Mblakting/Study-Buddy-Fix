import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/authService';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await authService.signup(formData); 
        alert("Akun berhasil dibuat! Silakan login.");
        navigate('/login');
      } catch (err) {
        console.error(err.response?.data || err.message);
        alert(err.response?.data?.message || "Gagal daftar. Periksa kembali data Anda.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-10 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-xl mb-4 shadow-lg shadow-purple-200 flex items-center justify-center text-white font-bold text-xl">SB</div>
          <h1 className="text-2xl font-bold text-slate-800">Buat Akun Baru</h1>
          <p className="text-slate-400 text-sm mt-1 text-center">Mulai atur jadwal belajarmu dengan cerdas.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Nama Lengkap</label>
            <input 
              type="text" 
              placeholder="Masukkan nama Anda"
              className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-100"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Email</label>
            <input 
              type="email" 
              placeholder="nama@email.com"
              className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-100"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="Minimal 8 karakter"
              className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-4 focus:ring-indigo-100"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="flex items-start gap-2 py-2">
            <input type="checkbox" className="mt-1 accent-indigo-600" required />
            <p className="text-xs text-slate-500 leading-relaxed">Saya setuju dengan <span className="text-indigo-600 underline font-medium">Syarat & Ketentuan</span></p>
          </div>

          <button 
            type="submit" 
            disabled={loading || !formData.name || !formData.email || !formData.password}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95"
          >
            {loading ? 'Sedang Membuat Akun...' : 'Buat Akun'}
          </button>
        </form>

        <p className="text-center mt-10 text-slate-500 text-sm">
          Sudah punya akun? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Masuk di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;