import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const TaskList = ({ tasks, setTasks, setEditingTask }) => {
  const { user } = useAuth();
  console.log(tasks)
  const handleDelete = async (taskId) => {
    try {
      await axiosInstance.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      alert('Failed to delete task.');
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task._id} className="w-2/3 max-w-3xl bg-white p-5 rounded-lg shadow-sm border border-gray-300">
          {/* User info section */}
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div> {/* Placeholder for avatar */}
            <div>
              <p className="text-sm font-semibold text-gray-800">{task.username}</p>
              <p className="text-xs text-gray-500">{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Thread content */}
          <h2 className="text-lg font-semibold text-gray-900">#{task.title}</h2>
          <p className="text-gray-700">{task.description}</p>

          {/* Actions */}
          <div className="mt-3 flex space-x-4 text-sm">
            <button className="text-blue-500 hover:underline">Reply</button>
            <button className="text-yellow-500 hover:underline" onClick={() => setEditingTask(task)} >Update</button>
            <button
              onClick={() => handleDelete(task._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>

          {/* Replies Section */}
          <div className="mt-4 border-l-2 border-gray-200 pl-4 space-y-3">
            {/* Example reply */}
            <div className="text-sm">
              <p className="font-semibold text-gray-800">Another User</p>
              <p className="text-gray-600">This is an example reply.</p>

            </div>
          </div>
        </div>
      ))}
    </div>





  );
};

export default TaskList;
