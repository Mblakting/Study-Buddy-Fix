import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import taskService from '../services/taskService';
import TaskItem from '../components/TaskItem.jsx';
import { Plus, ListTodo, Loader2 } from 'lucide-react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTaskName, setNewTaskName] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const data = await taskService.getTasks();
      setTasks(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

const handleAddTask = async (e) => {
  e.preventDefault();

  try {
    const response = await taskService.createTask({
      title: newTaskName,
      completed: false
    });
    setTasks([...tasks, response]);
    setNewTaskName('');
  } catch (err) {
    console.error("Gagal tambah tugas:", err.response?.data);
    alert("Gagal menambah tugas");
  }
};

const handleToggleTask = async (id) => {
  const taskToToggle = tasks.find(t => t.id === id);
  const updatedStatus = !taskToToggle.completed;

  try {
    await taskService.updateTask(id, { completed: updatedStatus });
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: updatedStatus } : t));
  } catch (err) {
    console.error("Update error:", err.response?.data);
    alert("Gagal update tugas");
  }
};

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Hapus tugas ini?")) return;
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      console.error("Delete error:", err.response?.data);
      alert("Gagal menghapus tugas: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="space-y-8 p-4 md:p-0">
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Tugas Saya</h2>
          <p className="text-slate-500">Kelola jadwal belajar harianmu.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
          <ListTodo className="text-indigo-600" size={20} />
          <span className="font-semibold">{tasks.length} Total Tugas</span>
        </div>
      </section>

      <form onSubmit={handleAddTask} className="flex gap-3">
        <input 
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Tulis tugas baru..."
          className="flex-1 bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:ring-4 focus:ring-indigo-100 outline-none transition-all"
        />
        <button 
          type="submit" 
          disabled={!newTaskName.trim()}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all active:scale-95 flex items-center gap-2"
        >
          <Plus size={20} /> Tambah
        </button>
      </form>

      <div className="grid gap-4">
        {isLoading ? (
          <div className="text-center py-20 text-slate-400">
            <Loader2 className="animate-spin mx-auto mb-2" size={32} />
            <p>Menghubungkan ke API...</p>
          </div>
        ) : (
          <AnimatePresence>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <TaskItem 
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              ))
            ) : (
              <p className="text-center py-20 text-slate-400 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                Belum ada tugas.
              </p>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Dashboard;