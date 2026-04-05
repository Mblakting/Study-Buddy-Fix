import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('user_name') || 'User';

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <nav className="bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">SB</div>
        <span className="font-bold text-slate-800 text-lg tracking-tight">StudyBuddy</span>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-slate-600">Halo, {userName}</span>
        <button 
          onClick={handleLogout}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;