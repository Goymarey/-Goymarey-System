import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch tasks from API or context
    const fetchTasks = async () => {
      // Placeholder for task fetching logic
      const mockTasks = [
        { id: 1, title: 'Design Database Schema', status: 'In Progress', priority: 'High' },
        { id: 2, title: 'Implement User Authentication', status: 'Not Started', priority: 'Medium' },
        { id: 3, title: 'Create API Endpoints', status: 'Completed', priority: 'Low' }
      ];
      setTasks(mockTasks);
    };

    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task => 
    filter === 'all' || task.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <div>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="all">All Tasks</option>
            <option value="not started">Not Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Task Title</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{task.title}</td>
              <td className="p-3">
                <span className={`
                  px-2 py-1 rounded 
                  ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                    task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-gray-100 text-gray-800'}
                `}>
                  {task.status}
                </span>
              </td>
              <td className="p-3">{task.priority}</td>
              <td className="p-3 text-right">
                <Link 
                  to={`/tasks/${task.id}`} 
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;