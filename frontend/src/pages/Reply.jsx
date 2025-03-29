import { useState, useEffect } from 'react';
import axiosInstance from '../axiosConfig';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useAuth } from '../context/AuthContext';
const Tasks = () => {

    const { user } = useAuth();
    const [replies, setReplies] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const response = await axiosInstance.get('/api/tasks/:id/reply', {
                    headers: { Authorization: `Bearer ${user.token}` },
                });
                setReplies(response.data);
            } catch (error) {
                alert('Failed to fetch tasks.');
            }
        };

        fetchReplies();
    }, [user]);

    return (
        <div className="container mx-auto p-6">
            <TaskForm
                tasks={replies}
                setTasks={setReplies}
                editingTask={editingTask}
                setEditingTask={setEditingTask}
            />
            <TaskList tasks={replies} setRe={setReplies} setEditingTask={setEditingTask} />
        </div>
    );
};

export default Tasks;
