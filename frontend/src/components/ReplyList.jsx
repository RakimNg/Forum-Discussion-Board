import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const ReplyList = ({ replies, setReplies }) => {
    const { user } = useAuth();
    console.log(tasks)
    //   const handleDelete = async (taskId) => {
    //     try {
    //       await axiosInstance.delete(`/api/tasks/${taskId}`, {
    //         headers: { Authorization: `Bearer ${user.token}` },
    //       });
    //       setTasks(tasks.filter((task) => task._id !== taskId));
    //     } catch (error) {
    //       alert('Failed to delete task.');
    //     }
    //   };

    return (
        <div>
            {replies.map((reply) => (
                <div key={reply._id} className="bg-gray-100 p-4 mb-4 rounded shadow">
                    <h2 className="font-bold">{reply.content}</h2>
                    <p>{reply.date}</p>
                    {/* <p>{reply.}</p> */}
                    {/* <p className="text-sm text-gray-500">Created at: {new Date(task.deadline).toLocaleDateString()}</p> */}
                    <p className="text-sm text-gray-500">Created by: {user.name}</p>

                    {/* <div className="mt-2">
            <button
              className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              View
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>

          </div> */}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
