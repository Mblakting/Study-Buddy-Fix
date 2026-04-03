import api from '../api/axios';

const authService = {
  signup: async (userData) => {
    const response = await api.post('/signup', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/login', credentials);
    
    // Pastikan ini mengambil data dari response yang benar
    if (response.data.token) {
      localStorage.setItem('user_token', response.data.token);
    }
    
    // Ambil ID dari objek user (ID: 3 pada gambar kamu)
    // Pastikan strukturnya seperti ini
    if (response.data.user) {
    localStorage.setItem('user_id', response.data.user.id); // Simpan angka 3
    localStorage.setItem('user_name', response.data.user.name);
    }
        
    return response.data;
  },
  
  logout: () => {
    localStorage.clear();
    window.location.href = '/login';
  }
};

export default authService;