import api from '../api/axios';

const taskService = {
  getTasks: async () => {
    // Mengambil semua tugas
    const response = await api.get('/tasks');
    return response.data;
  },
  
  createTask: async (taskData) => {
    // Menambah tugas baru (mengirim title, user_id, is_completed)
    const response = await api.post('/tasks', taskData);
    return response.data;
  },
  
  updateTask: async (id, taskData) => {
    // Update status tugas
    const response = await api.put(`/tasks/${id}`, taskData);
    return response.data;
  },
  
  deleteTask: async (id) => {
    // Hapus tugas
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  }
};

export default taskService;