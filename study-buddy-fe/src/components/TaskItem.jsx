import { motion } from 'framer-motion';
import { Trash2, CheckCircle } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center group"
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`p-1 rounded-full transition-colors ${
            task.completed ? 'text-green-500 bg-green-50' : 'text-slate-300 hover:text-indigo-500'
          }`}
        >
          <CheckCircle size={24} />
        </button>

        <span className={`font-medium transition-all ${
          task.completed ? 'line-through text-slate-400' : 'text-slate-700'
        }`}>
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-slate-300 hover:text-red-500 p-2 transition-colors"
      >
        <Trash2 size={20} />
      </button>
    </motion.div>
  );
};

export default TaskItem;
