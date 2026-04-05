import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../services/authService';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authService.login({ email, password });
      
      if (response.token) {
        console.log("Login sukses!");
        onLoginSuccess(response.token); 
        navigate('/dashboard'); 
      }
    } catch (err) {
      console.error(err);
      alert("Gagal login. Periksa email dan password.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-10 rounded-[32px] shadow-xl border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-xl mb-4 flex items-center justify-center text-white font-bold text-xl">SB</div>
          <h1 className="text-2xl font-bold text-slate-800">StudyBuddy Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <input 
            type="email" placeholder="Email" required
            className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:border-indigo-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all"
          >
            {loading ? 'Sedang Masuk...' : 'Masuk Sekarang'}
          </button>
        </form>
        <p className="text-center mt-6 text-slate-500">
          Belum punya akun? <Link to="/signup" className="text-indigo-600 font-bold">Daftar</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;